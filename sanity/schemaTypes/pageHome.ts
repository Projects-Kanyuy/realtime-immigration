import { defineField, defineType } from "sanity";

export const pageHome = defineType({
  name: "pageHome",
  title: "Home Page Content",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "about", title: "About Section" },
    { name: "services", title: "Services Section" },
    { name: "trust", title: "Why Choose Us" },
    { name: "contact", title: "Contact Section" },
  ],
  fields: [
    // --- HERO ---
    defineField({
      name: "heroTitle",
      type: "string",
      title: "Main Heading",
      group: "hero",
    }),
    defineField({
      name: "heroSubtitle",
      type: "string",
      title: "Sub-heading (Blue)",
      group: "hero",
    }),
    defineField({
      name: "heroDescription",
      type: "text",
      title: "Description",
      group: "hero",
    }),

    // --- ABOUT ---
    defineField({
      name: "aboutHeading",
      type: "string",
      title: "Heading",
      group: "about",
    }),
    defineField({
      name: "aboutText1",
      type: "text",
      title: "Paragraph 1",
      group: "about",
    }),
    defineField({
      name: "aboutText2",
      type: "text",
      title: "Paragraph 2",
      group: "about",
    }),
    defineField({
      name: "aboutTrustPoints",
      type: "array",
      title: "Bullet Points",
      of: [{ type: "string" }],
      group: "about",
    }),
    defineField({
      name: "aboutBottomNote",
      type: "text",
      title: "Bottom Note",
      group: "about",
    }),

    // --- SERVICES ---
    defineField({
      name: "servicesHeading",
      type: "string",
      title: "Heading",
      group: "services",
    }),
    defineField({
      name: "servicesSubheading",
      type: "string",
      title: "Subheading",
      group: "services",
    }),
    defineField({
      name: "servicesList",
      type: "array",
      title: "Services Cards",
      group: "services",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
            { name: "items", type: "array", of: [{ type: "string" }] },
          ],
        },
      ],
    }),

    // --- WHY CHOOSE US ---
    defineField({
      name: "trustHeading",
      type: "string",
      title: "Heading",
      group: "trust",
    }),
    defineField({
      name: "trustDescription",
      type: "text",
      title: "Description",
      group: "trust",
    }),
    defineField({
      name: "trustPoints",
      type: "array",
      title: "Proof Cards",
      of: [{ type: "string" }],
      group: "trust",
    }),
    defineField({
      name: "trustCtaText",
      type: "string",
      title: "CTA Button Label",
      group: "trust",
    }),

    // --- CONTACT SECTION ---
    defineField({
      name: "contactHeading",
      type: "string",
      title: "Heading",
      group: "contact",
      initialValue: "Speak With Our Team",
    }),
    defineField({
      name: "contactDescription",
      type: "text",
      title: "Description",
      group: "contact",
    }),
    defineField({
      name: "contactPhones",
      type: "array",
      title: "Phone Numbers",
      group: "contact",
      of: [{ type: "string" }],
      initialValue: ["0977 205 704", "0958 205 700"],
    }),
  ],
});
