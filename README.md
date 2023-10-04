### [NextJs](https://nextjs.org/) compliant Sidebar Component.

\* Uses FontAwesome CDN link to render `<i />` icons in the sidebar links

#### Benefits:

- Compatible with NextJS 13+
- Easier-to-read code with optional props for customization
- Lots of customization options, with less of the component bloat

#### Specifications

- Language
  - Typescript
- Framework
  - React >18+
  - NextJS >13+

##### Props Descriptions

- **`includeImage`** _boolean_
  - Whether to include an image in the top sidebar, useful for company websites
- **`imageSrc`** _string_
  - The src of the image if included
- **`imageTitle`** _string_
  - The title of the image if included, text is displayed underneath the image in a slightly smaller font
- **`links`** _SideBarLink[]_
  - The associated links you want displayed in the sidebar component

###### SideBarLink (Type)

- **`content`** _ReactNode_
  - The content of the link (usually just text)
- **`iconLink`** _string_
  - The [font-awesome](https://fontawesome.com/icons) tag, used to render the respective icon next to the link text.
- **`hasAccess`** _boolean_
  - Whether the current user has access to the link, used for roles, authorization, etc
- **`href`** _string_
  - The href link appended to the anchor tag in the link
- **`onClick`** _(\_link: string) => void | Promise<void>_
  - The onClick callback that is fired when the link is clicked, with the link auto-populated into the parameter
