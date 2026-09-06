import { test, expect } from "@playwright/test";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

for (const locale of ["es", "en"] as const) {
  test(`${locale}: responsive layout, CV downloads and complete experience`, async ({
    page,
  }, testInfo) => {
    const pageErrors: string[] = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));
    await page.goto(`/${locale}`);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "CamiloLópez.",
    );
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("body")).toHaveCSS(
      "font-family",
      /Space Grotesk/,
    );
    const favicon = await page.request.get("/favicon.ico");
    expect(favicon.status()).toBe(200);
    await expect(page.locator(".hero-profile")).toHaveCSS("opacity", "1");
    for (const language of ["ES", "EN"]) {
      const downloadEvent = page.waitForEvent("download");
      await page
        .locator(`a[download="CamiloLopez_CV_${language}.pdf"]`)
        .click();
      const download = await downloadEvent;
      expect(download.suggestedFilename()).toBe(
        `CamiloLopez_CV_${language}.pdf`,
      );
      const downloaded = await readFile((await download.path())!);
      const original = await readFile(
        `public/cv/CamiloLopez_CV_${language}.pdf`,
      );
      expect(createHash("sha256").update(downloaded).digest("hex")).toBe(
        createHash("sha256").update(original).digest("hex"),
      );
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.screenshot({
      path: testInfo.outputPath(`${locale}-hero.png`),
      scale: "css",
    });
    for (const section of await page.locator("main section").all()) {
      await section.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        )
        .toBe(true);
    }
    const details = page.locator(".job-details").first();
    await details.locator("summary").click();
    await expect(details).toHaveAttribute("open", "");
    await expect(details.getByText(/PostgreSQL/)).toBeVisible();
    await details.locator("summary").focus();
    await page.keyboard.press("Enter");
    await expect(details).not.toHaveAttribute("open", "");
    await expect(page.locator(".job-meta h3")).toHaveText([
      "Audisoft",
      "Espacio RH LATAM",
      "Havas Colombia",
      "DataCRM",
      "Dakiti Buzos & Camele Tienda",
    ]);
    await expect(
      page.locator(".archive-project, .selected-project"),
    ).toHaveCount(9);
    await expect(page.locator(".contact-email")).toHaveAttribute(
      "href",
      "mailto:camilo06180401@gmail.com",
    );
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page
      .locator("#projects")
      .evaluate((node) => node.scrollIntoView({ block: "start" }));
    await expect(
      page.locator(".selected-projects > .reveal").first(),
    ).toHaveCSS("opacity", "1");
    await page.screenshot({
      path: testInfo.outputPath(`${locale}-projects.png`),
      scale: "css",
    });
    // Reduced motion makes the full-document capture readable without pending reveals.
    await page.evaluate(() => {
      (document.activeElement as HTMLElement)?.blur();
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    await page.screenshot({
      path: testInfo.outputPath(`${locale}-full.png`),
      fullPage: true,
      scale: "css",
    });
    expect(pageErrors).toEqual([]);
  });
}

test("language switch, keyboard navigation and mobile menu", async ({
  page,
  isMobile,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/es");
  if (isMobile) {
    await page.getByRole("button", { name: "Abrir menú" }).click();
    await expect(
      page.getByRole("button", { name: "Cerrar menú" }),
    ).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Abrir menú" }),
    ).toBeFocused();
    await page.getByRole("button", { name: "Abrir menú" }).click();
    await page
      .locator("#mobile-navigation")
      .getByRole("link", { name: "Experiencia" })
      .click();
    await expect(page.locator("#mobile-navigation")).toBeHidden();
  } else {
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Saltar al contenido" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("main")).toBeFocused();
    await page
      .locator(".desktop-nav")
      .getByRole("link", { name: "Experiencia" })
      .click();
    await expect(
      page.locator('.desktop-nav a[href="#experience"]'),
    ).toHaveAttribute("aria-current", "location");
  }
  await expect(page).toHaveURL(/#experience$/);
  await page.getByRole("link", { name: /Switch to English/ }).click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.getByRole("link", { name: /Cambiar a español/ }).click();
  await expect(page).toHaveURL(/\/es$/);
});

test("narrow screens and content without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 320, height: 800 },
    colorScheme: "light",
  });
  const page = await context.newPage();
  await page.goto("/es");
  await expect(
    page.getByRole("heading", { name: "Proyectos destacados" }),
  ).toBeVisible();
  await expect(page.locator(".about-copy")).toHaveCSS("opacity", "1");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await context.close();
});
