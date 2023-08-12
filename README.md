# SNXTL Web App Template 🔥

Project template for Web Apps to provide easy and efficient setup for full-stack web projects that are content focused. By leveraging Sanity, Next.js, TypeScript and Tailwind, it enables creating a robust and dynamic web applications with ease.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Sanity Schema](#sanity-schema)
3. [Resources](#resources)

## Getting Started

Before getting started you will need to create a Sanity.io account and project to retrieve a project ID. You can do so by following the instructions [here](https://www.sanity.io/docs/getting-started-with-sanity-cli).

After that, clone the repository and install dependencies running in the root:

```bash
pnpm i
```

Replace the `projectId` in `studio/environment.ts` with your own project ID.

```ts
// studio/environment.ts
export const dataset = 'production';
export const projectId = '<your-project-id>';
```

Create a .env in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_PROJECT_ID='<your-project-id>'
NEXT_PUBLIC_SANITY_API_VERSION="2023-08-01"
```

Then run both the studio and web app in development mode:

```bash
# To run both the studio and web app with concurrently
pnpm dev
# To only run the client app
pnpm client
# To only run the studio
pnpm studio
```

The studio will be available at [http://localhost:3333](http://localhost:3333) and the next.js app at [http://localhost:3000](http://localhost:3000).

## Sanity Schema

<!-- The schema is located in `studio/schemas/schema.ts`. It is a simple schema that includes a document type for pages and a document type for navigation items. The navigation items are used to create a navigation menu in the studio. -->

The SNXTL Web App Template utilizes Sanity as the content management system (CMS) to manage and organize your content. To set up your CMS schemas, follow these steps:

**Schema Definition**: Navigate to the `studio/schemas` directory in your project. Here, you'll find a set of example schemas that demonstrate the structure of your content types.

**Schema Customization**: For each schema file, you can tailor the structure by referring to Sanity's Schema Types Documentation. This resource provides detailed information on various field types, validation, and customization options.

**Preview Configurations**: By default, the template provides a basic preview configuration. If you want to enhance your studio desk preview, you can modify the `studio/deskStructure.tsx` file.

**Deploying the Schema**: After defining your schemas and customizations, deploy them to your Sanity project by running the following command from the root directory of your project:

```bash
cd studio && sanity build && sanity deploy
```

## Resources

Here are some useful resources to further enhance your understanding:

- **[Sanity Documentation](https://www.sanity.io/docs)**

- **[Next.js Documentation](https://nextjs.org/docs)**

- **[TypeScript Documentation](https://www.typescriptlang.org/docs/)**

- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)**
- **[PNPM Documentation](https://pnpm.io/)**

- **[GitHub Repository](https://github.com/your-username/your-project-repo)**
