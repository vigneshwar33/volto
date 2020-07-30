# Change Log

## 7.3.1 (unreleased)

### Breaking

### Feature

- Added Placeholder attribute to Textwidget and TextAreaWidget @iFlameing
- Separate the Form.jsx state in its own component exposed as a context. This enables clean multi-block editing from other blocks, exposes the form state to widgets and many other advanced scenarios. @tiberiuichim

### Bugfix

### Internal

## 7.3.0 (2020-07-26)

### Feature

- Add Placeholder attribute to Textwidget and TextAreaWidget @iFlameing
- Make the default block type (currently draftjs text) configurable @tiberiuichim @silviubogan

### Internal

- Upgrade lodash dependency to 4.17.19 @tisto
- Add a new blocks helper method, `getBlocks`. It simplifies using `getBlocksFieldname` and `getBlocksLayoutFieldname` under a single method that returns ordered pairs of `[blockid, blockvalue]` @tiberiuichim

## 7.2.1 (2020-07-16)

### Internal

- Upgrade to Cypress 4.10.0 @tisto
- Upgrade to cypress-file-upload 4.0.7 @iFlameing

## 7.2.0 (2020-07-13)

### Feature

- Provide a new webpack alias, `volto-themes`, which points to Volto's theme folder. See details in the https://docs.voltocms.com/upgrade-guide/

### Internal

- Upgrade razzle to `^3.1.5`. @tiberiuichim

## 7.1.0 (2020-07-09)

### Feature

- Addons can optionally include a `razzle.extend.js` file in their root. This module needs to follow the same rules as the `razzle.config.js`. They change the default Volto Razzle configuration, before it is passed to the Volto project @tiberiuichim @sneridagh

### Bugfix

- Managed hidden fields @giuliaghisini
- Fix bug in addon loading with namespaced packages @tiberiuichim
- Japanese translation updated @terapyon

- Upgrade razzle to `^3.1.5`. @tiberiuichim

## 7.0.1 (2020-07-07)

### Breaking

### Feature

- Added Blocks Layout Editor within Dexterity Content-Types Controlpanel @avoinea #1517
### Bugfix

- Adding absolute url in ObjectBrowser for image type @iFlameing

## 7.0.0 (2020-07-06)

### Breaking

- Fix filename of strickthrough.svg to strikethrough.svg @tiberiuichim

### Feature

- Addons configuration loading. You can now declare addons in the addons key of
  package.json and they'll be automatically loaded. @tiberiuichim @sneridagh

## 6.5.0 (2020-07-03)

### Feature

- Added default Export for the QuerystringWidget for the ListingBlock @steffenri

### Bugfix

- Fix text overflow in pastanaga-menu header if title is too long. @giuliaghisini
- Fixing bug to correctly assign classes to image sizes in View @steffenri
- Center aligned Images are now displayed like they are center aligned in the View @steffenri
- Fix datepicker z-index @giuliaghisini

### Internal

- Upgrade insecure packages `http-proxy`, `http-proxy-middleware` and `handlebars` @tiberiuichim

## 6.4.1 (2020-07-01)

### Breaking

### Feature

- Allow JSON API calls to made to third-party servers @tiberiuichim

### Bugfix

- Fix styling and use of csss classes in `InlineForm.jsx` @tiberiuichim

- Fixing bug for Image Preview on upload @iFlameing

### Internal

- Fix formatting of `src/server.jsx` @tiberiuichim

## 6.4.0 (2020-06-29)

### Feature

- Translated workflow state in contents @nzambello
- Added item type as a tooltip in contents @nzambello
- Added Italian translations and translated array, token and select widget. @giuliaghisini
- Added uploading image preview in FileWidget @iFlameing
- Allow custom express middleware declared with `settings.expressMiddleware`. See [Customizing Express](docs/source/customizing/express.md) @tiberiuichim

### Bugfix

- Fix the toolbar dropdown to add content types if isMultilingual is enabled
  but a type is not marked as translatable. @csenger
- Usage of Contettype label in Add component. @giuliaghisini

### Internal

- Update upgrade-guide to for `addonRoutes` and `addonReducers` @jackahl

## 6.3.0 (2020-06-22)

### Feature

- Added internationalization for French language @bsuttor #1588
- use of maximumSelectionSize from plone in ObjectBrowserWidget. @giuliaghisini
- Added selectableTypes in ObjectBrowserWidget @giuliaghisini

### Bugfix

- added export for ObjectBrowserWidget in component/index.js @giuliaghisini
- Fixed duplicated items in SelectWidget and ArrayWidget @giuliaghisini
- Update German translation @timo
- Removed broken preview image in ContentsUploadModal if uploaded item is not an image. @giuliaghisini
- Localized content upload modal last modified date @nzambello
- Fix overflow in folder contents with long titles @nzambello
- Fixed object browser widget when a selected items is deleted. Plone.restapi returns a null object. @giuliaghisini
- Fixed error on adding new item if parent item is not translated when multilingual is set @giuliaghisini
- Added translations for select in querystring widget @nzambello

## 6.2.0 (2020-06-14)

### Feature

- Added database information component in ControlPanels @iFlameing

### Internal

- Add yarn-deduplicate. @timo

## 6.1.0 (2020-06-12)

### Feature

- Include `config.addonRoutes` in router configuration. This allows addons to
  override route children defined for the `App` component.
- Added param 'wrapped' for widgets, to use widgets without form wrappers. @giuliaghisini
- Added internationalization for Romanian language @alecghica #1521
- Support loading additional reducers from the `config.addonReducers` key,
  to allow addons to provide their own reducers @tiberiuichim
- Add a no brainer image sizing option, using scales. This will be vastly improved when
  we adopt srcsets. @sneridagh

### Bugfix

- Removed a regex check in default view, we already have that check implemented in `toHTML.jsx` L173s @nileshgulia1
- UX and UI improvements to `DateTimeWidget` @sneridagh
- Fix an UTC handling for edge cases in `DateTimeWidget` @sneridagh
- Do not store the server information of the image block in the block @sneridagh
- expose `blocks` and `blocks_layout` only editing content types @nileshgulia1
- Small fix for `TextAreaWidget` and max_lenght @sneridagh

## 6.0.0 (2020-05-18)

### Breaking

- Removed support for CSS modules, since Razzle 3.1.x do not support them @sneridagh
- Updated Volto dependencies - See https://docs.voltocms.com/upgrade-guide/ for more information @sneridagh
- By adding `react-beautiful-dnd` in the block editor we are introducing new wrappers
  (belonging to the lib machinery) in the structure. The original structure and class
  names are still in there for maintain maximum backwards compatibility. Those might be
  cleaned up in next major versions, so if for some reason you have customized the
  styling of your blocks in edit mode relying in the old structure, you might want to
  review and adapt them @sneridagh

### Feature

- Added `react-beautiful-dnd` in core for edit form @iFlameing

### Bugfix

- Improve `isInternalURL` helper to match also anchors @sneridagh
- Fix local build when no RAZZLE_API_PATH is set @sneridagh
- Fix `WysiwygWidget` redraft HTML conversion when creating an empty paragraph force a `<br />` on it @sneridagh

### Internal

- Update to Razzle 3.1.2 @sneridagh
- Update to React 16.13.1 @sneridagh
- Removal of unused (and deprecated) `@babel/preset-stage-0` @sneridagh
- Update `react-router` @sneridagh
- Update `react-redux` and friends @sneridagh
- Update `connected-react-router` @sneridagh
- Update low hanging fruits deps @sneridagh
- Update style/less loaders and friends @sneridagh
- Update stylelint and friends @sneridagh
- Update prettier @sneridagh
- Update eslint plugins @sneridagh
- Update `cypress-axe`, `detectbrowser`, `lint-staged` and `release-it` @sneridagh

## 5.10.0 (2020-05-16)

### Feature

- Refactor createContent command to accept a single json object @iFlameing
- enable hyperlinks in comments when intelligent text is enabled for comments @jackahl
- Added InlineForm, a generic form implementation that can be used to edit, among others, block data. @tiberiuichim

### Internal

- Make available some internal artifacts (Router, Redux Store and Settings) to the Cypress acceptance tests, add docs @sneridagh
- Added a cypress test for the comment @iFlameing
- Add a cypress function to set registry entries @jackahl

## 5.9.1 (2020-05-15)

### Bugfix

- Fix Bug in Form Component, that lead to site crash when transmitting a comment @jackahl #1475
- Fix for the long lasted issue when creating links in newly created text blocks not showing as links until you save @avoinea

### Internal

- add a cypress function to set registry entries @jackahl

## 5.9.0 (2020-05-12)

### Feature

- Implemented a new ObjectBrowserWidget @giuliaghisini
- Add system information in controlpanel @iFlameing #1457
- Added Dexterity Types Controlpanel @avoinea #1285
- Remember sort order of folder contents view. @ksuess

### Bugfix

- Fix new lines inside blockquotes are not rendered @iFlameing #1249
- Fix blockquote style render error: unique key @iFlameing #1097
- Added Dexterity control panel Cypress tests @iFlameing

## 5.8.0 (2020-05-11)

### Feature

- Adding Image Gallery template in Listing view @iFlameing

## 5.7.1 (2020-05-08)

### Bugfix

- Fix translation locator lookup in `CreateTranslation` component and remove the no longer needed store reducer @sneridagh

## 5.7.0 (2020-05-08)

### Feature

- Enable `@querystringresults` action to use the new context aware query feature @sneridagh

## 5.6.1 (2020-05-08)

### Bugfix

- REALLY load the current object language on SSR, instead of relying on the cookie @sneridagh

### Internal

- Pin some api devs (ZCatalog and p.namedfile improvements) @sneridagh

## 5.6.0 (2020-05-06)

### Feature

- Load the current object language on SSR, instead of relying on the cookie @sneridagh

### Bugfix

- Correct the `defaultLanguage` intend in `react-intl-redux` configuration @sneridagh

### Internal

- Add default `src` alias for addons detecting if there is a released or a mrs-developer one @sneridagh

## 5.5.0 (2020-05-06)

### Feature

- Added label expired if expiration date is smaller that current date #1413 @iFlameing
- Added word limit widget @iFlameing
- Addons control panel @esteele @iFlameing

### Internal

- Cypress test for Table Block @steffenri @iFlameing
- Cypress tests upgraded for Image, Hero and HTML Block @steffenri @iFlameing
- Added cypress test for sort method in folder content #1035 @iFlameing

## 5.4.0 (2020-05-04)

### Feature

- Add babel and externals support in Webpack for add-on infrastructure @sneridagh
- Forward the images and files cache headers in Volto SSR passthrough @sneridagh

### Bugfix

- Fix handling of external links in ToHTML config @nzambello
- Remove the title field from right dropdown in folder content view

### Internal

- Periodical upgrade of `browserlist` lib @sneridagh

## 5.3.0 (2020-04-29)

### Feature

- Add general @navigation endpoint depth setting @sneridagh

### Bugfix

- Fix `<html>` `lang` attribute @sneridagh

## 5.2.1 (2020-04-27)

### Internal

- Remove console log in workflow asyncConnect :( @sneridagh

## 5.2.0 (2020-04-27)

### Feature

- Improvement of API requests error handling @sneridagh
- Unauthorized on folder contents if no proper credentials @sneridagh

### Bugfix

- Improve German translations for folder contents view @timo
- Make label of checkboxwidget clickable @pbauer #1414
- Show new added user in user control panel @iFlameing #1271
- Support multi selection in roles and groups and polish add user #1372
- Listing block: removed message 'No results found' only in view mode on public site, in editMode is still present. @giuliaghisini

### Internal

- Add crossorigin to the preload resources tags while in development @sneridagh
- Permissions in contents and Edit @sneridagh
- Fix the error on content Edit no credentials now shows `Unauthorized` @sneridagh
- Improve console server output showing info @sneridagh

## 5.1.0 (2020-04-23)

### Breaking

### Feature

- Full screen right sidebar @rexalex #1345
- Enable internal API proxy for not to rely on CORS on development @sneridagh
- Added Print CSS @iFlameing #1289
- Added error handling for Add and Edit forms #1392 @nzambello

### Bugfix

- Japanese translation @terapyon
- Fix `ArrayWidget` to support multiselect schema `schema.List`/`schema.Set`-> `schema.Choice` hardcoded (not using vocabularies) combination @sneridagh
- Remove Back button from control panels, since it's redundant @sneridagh
- Show past dates in date time widget calendar @nzambello

### Internal

- Translated labels in Eventi View @nzambello
- Improve i18n script, so shadowed components are not overriding their original translations. For the record, any override of i18n messages, should be done somewhere else (eg. config object) @sneridagh

## 5.0.1 (2020-04-16)

### Bugfix

- Show new added user in user control panel @iFlameing #1271
- Fixes for contact form @nzambello

## 5.0.0 (2020-04-12)

### Breaking

- Added basic lazy loading dependencies and boilerplate @sneridagh
- Change component to where page title is set to `View.jsx`, remove all `Helmet` calls from inner views @jackahl

### Feature

- Added date time widget @nzambello
- Add meta description tags and meta generator @sneridagh
- Add lang property in `html` tag depending on the site/content language @sneridagh
- Add `App.jsx` component insertion point @sneridagh
- Lazy load `EventView.jsx`, splitting out all its big dependencies (Luxon) along with it @sneridagh
- Lazy load `pretty` library, used in the HTML block @sneridagh
- Lazy load `Raven` library @sneridagh
- Lazy load `React Select` library @sneridagh

### Bugfix

- Show save/cancel on control panels @avoinea #850
- Fix listing "show more" link rendering conditions @nzambello

### Internal

- Make Jest only looks up in `src` folder @sneridagh
- Re-arrange `components/index.js` @sneridagh
- Added a patch for Razzle Jest config generator to include `modulePathIgnorePatterns` option @sneridagh
- Fix Travis random no sound card found error @sneridagh
- docs: add release documentation @tisto

## 4.6.0 (2020-04-06)

### Feature

- pagination on site search results @giuliaghisini

### Bugfix

- Fix use case for non-multilingual setups and on projects on lang loading @sneridagh

### Internal

- Typo in German translations @steffenri
- Complete more Italian translations @nzambello

## 4.5.0 (2020-04-06)

### Feature

- /sitemap to view sitemap based on @navigation with depth 4 @giuliaghisini

### Bugfix

- Fix ArrayWidget to support static supermodel vocabulary @datakurre
- Bring back the OutdatedBrowser component, it got removed in a bad merge :( @sneridagh

### Internal

- Improve the i18n script, only write the pot file if it's really different @sneridagh

## 4.4.0 (2020-04-03)

### Feature

- /contents (folder content view) is sortable @ksuess
- Updated the (folder content icons to Pastanaga Icons) @iFlameing

### Bugfix

- Fix conversion from DraftJS to HTML using redraft for atomic entities (IMAGE) @sneridagh

## 4.3.0 (2020-04-01)

### Feature

- Added recursive workflow changes @robgietema

### Bugfix

- Fixed ssr link view @robgietema

## 4.2.0 (2020-03-31)

### Feature

- Add Multilingual Support @sneridagh

## 4.1.2 (2020-03-30)

### Bugfix

- Fix typo for Japanese translation @terapyon
- Fix refresh of the `Breadcrumbs` and `Navigation` components on calling `/login` and `/logout` @sneridagh
- Fix refresh of the `Navigation` component on calling `/login` and `/logout` @sneridagh
- Adjust implementation of the download link behavior for files @sneridagh
- Fix Maps block to use maps-inner instead of video-inner class @timo
- Add div with class "table-of-contents" to ToC block @timo

### Internal

- Upgrade critical Plone 5.2.1 deps in api folder @sneridagh
- Improve Cypress Video Block tests @sneridagh @timo
- Run `yarn i18n` on any JSX change @sneridagh
- Add link mailto Cypress test @timo
- Added design guidelines manifesto @sneridagh

## 4.1.1 (2020-03-18)

### Bugfix

- Fix for #1267 - Link inside text for content-type without blocks breaks the site @sneridagh
- Japanese translation @terapyon
- Fix production mode for newly created `__DEVELOPMENT__` global @sneridagh

### Internal

- Upgrade to Cypress 4 @timo

## 4.1.0 (2020-03-13)

### Feature

- Add `flattenHTMLToAppURL` helper method for remove api url from TinyMCE generated HTML @cekk
- Add development mode global @sneridagh

### Bugfix

- Improve the UX of the listing block when queries are running @sneridagh
- Added table of content cypress test @steffenri

## 4.0.1 (2020-03-09)

### Bugfix

- Fixes #1262 - SSR support for "undetected" browsers
- Japanese translation @terapyon
- Site settings styling fixed in the Controlpanel
- Increase ObjectBrowser limit per folder to 1000, partially fixes #1259 @sneridagh
- Deprecate `utils.less` as it's a leftover and it collides with some use cases depending on the viewport, see: #1265

### Internal

- Use kitconcept.volto as integration package @sneridagh

## 4.0.0 (2020-03-01)

### Feature

Summary of the most important features in this final release. For more detailed information
refer to all of them in https://github.com/plone/volto/releases

- Improved Pastanaga Editor
- New Pastanaga Editor sidebar
- New mobile first toolbar
- Developing blocks experience simplified
- New Object Browser
- Listing, TOC, Lead Image blocks
- Improved existing blocks (Image, Video, Maps)
- New blocks chooser and future proof blocks definitions
- Definition of default Blocks per content type
- Body classes like the Plone ones hinting content types, section and current view
- New message system
- React hooks support
- Several internal libraries updated, including Redux, Router ones that support hooks as well
- New locales (es, it, ja, pt, pt_BR)

### Bugfixes

- Tons of bug fixes

## 4.0.0-alpha.43 (2020-03-01)

### Changes

- Fixes #982 - History compare/diff @avoinea
- Responsive header @ksuess
  - Anontools (login, register) wrapping under long navigation.
  - Breaking change: Hamburger menu also on tablet.
  - Mobile: compact display of anontools and search.

## 4.0.0-alpha.42 (2020-02-26)

### Changes

- Revert "Fix Scrolling Functionality if there are many columns in table" since it has non desired secondary effects in the table block and other tables @sneridagh

## 4.0.0-alpha.41 (2020-02-26)

### Changes

- Fixes for the `ListingView` (Issue #1188, Listing View) @wkbkhard
- Fix date widgets on QueryString widget on listings and in the widget @sneridagh
- Update German translation @tisto
- i18n in toolbar and folder contents view @ksuess

## 4.0.0-alpha.40 (2020-02-24)

### Added

- Add pagination support to listing blocks @sneridagh

### Changes

- Fix Video and Maps blocks hydration quirks on view mode @sneridagh
- Deleted Empty Select Component @aryamanpuri
- Fix `RichText` Widget on normal forms @sneridagh
- Fix Guillotina tests @bloodbare
- Fix problem with not wrapped element in `Provider` store in `WysiwygWidget` component
  due that now, the links are wrapped with a connected component @sneridagh

## 4.0.0-alpha.39 (2020-02-18)

### Added

- Add permission check to edit form @sneridagh

### Changes

- Fix and improve Error in SSR @sneridagh
- Fix `LinkAnchorPlugin` press Enter key inside blocks with draftJS widgets @sneridagh

### Internal

- Replace all relative paths to `@plone/volto` absolute paths to ensure you can override all the resources via component shadowing @sneridagh

## 4.0.0-alpha.38 (2020-02-18)

### Internal

- Update to use ESLint 6 @timo

## 4.0.0-alpha.37 (2020-02-18)

### Added

- Chose template for listing block @giuliaghisini
- Event type view @nileshgulia1 @pnicolli
- Add ability to define the starting blocks per content type @sneridagh
- Reference widget: show item title and path in search and hover items selected @giuliaghisini

### Changes

- Fix the "jump" on the blocks editor on focusing blocks @sneridagh
- Include link and size info to the full size image in `ImageView` view component @sneridagh
- In the Display menu, only show views that are implemented @pnicolli
- Hide Blocks fields in Layout fieldset in Add/Edit forms @pnicolli
- Updated italian translations @nzambello
- Fallback for non existing layout views registered in `constants/Layouts` when selected in the widget @sneridagh
- Fix select widget for array inline choices fields and `z-index` problem @sneridagh
- Improve UX of the edit block Image component @sneridagh
- Fix on creating a new block, it should show the sidebar block properties (#1167) @sneridagh
- Send only the changed fields on PATCH (edit content) operations @sneridagh
- Japanese translation @terapyon

### Internal

- Added forest.eea.europa.eu as deployed Volto in production @tiberiuichim
- Add SemanticUI responsive variables to the responsive utils @sneridagh
- Added `yarnhook` to the build @sneridagh

## 4.0.0-alpha.36 (2020-02-03)

### Changes

- Fix unable to login from /logout page (#1147) @sneridagh
- Fix sitemap.xml by increasing the batch size @robgietema
- Browser detect feature, adding a deprecation message for ancient browsers in the `App` component @sneridagh
- Adding fallback in the edit form, in case the blocks related fields are empty, so we are sure that the edit form shows at least the default blocks @sneridagh
- Fix shift return in tables @robgietema

## 4.0.0-alpha.35 (2020-01-31)

### Changes

- Fix CSS when multiselection widgets have multiple items, then provoke a line jump @sneridagh
- added new italian translations, added italian to available languages, translated some static string
- updated italian translations
- Fix listing block sidebar focus @sneridagh
- Fix getBaseUrl helper method to not match inner occurrences of nonContentRoutes @sneridagh

## 4.0.0-alpha.34 (2020-01-26)

### Changes

- Fix token expiration/renewer timer, this fixes #674 @sneridagh

## 4.0.0-alpha.33 (2020-01-26)

### Changes

- Updated Maps block to the sidebar and image block look and feel @sneridagh
- Update video block to the sidebar and get the image block look and feel @sneridagh

### Internal

- Fix and update to latest husky and lint-staged @sneridagh
- Fix for i18n to use defaultMessages instead to default to the id @sneridagh
- Update `babel-plugin-react-intl` to latest @sneridagh

## 4.0.0-alpha.32 (2020-01-24)

### Added

- Lead image behavior block @sneridagh sponsored by CMSCOM.jp @terapyon

### Changes

- Make login component honors the returnUrl prop if called from any pathname @sneridagh

### Internal

- Try to improve the realibility of the Cypress tests, reorganize commands @sneridagh
- Upgrade to Plone 5.2.1, add `Products.PloneHotfix20200121` @sneridagh
- Force global use of `browserslist` package to get rid of message on build @sneridagh

## 4.0.0-alpha.31 (2020-01-22)

### Changes

- fix `SelectWidget`, when there is a vocabulary and no choices @sneridagh

## 4.0.0-alpha.30 (2020-01-22)

### Added

- Added listing block @pnicolli @rodfersou @sneridagh @giuliaghisini

### Changes

- fix bug in TokenWidget and ArrayWidget when removing all elements. @giuliaghisini
- fix listing block customization @giuliaghisini
- fix Querystring widgets failing to render if the `MultipleSelectionWidget` field applied is not included in the site vocabulary returned by `@querystring`. This applies to `Subject` field when the tag value is not there any more. @sneridagh
- fix QueryString widget on creation when query is empty, fixed broken when editing after too @sneridagh

## 4.0.0-alpha.29 (2020-01-18)

### Changes

- Remove dangling reference to external data in Image block not used anymore, causing confusion and lead to dead (and wrong) code @sneridagh
- Remove last remains of the append secondary actions, remove Image block toolbar. Update i18n, fix small issues in Image block @sneridagh

## 4.0.0-alpha.28 (2020-01-17)

### Changes

- Fix ToC anchor links in Firefox @robgietema

## 4.0.0-alpha.27 (2020-01-17)

### Changes

- Fix removing links in blocks @robgietema

## 4.0.0-alpha.26 (2020-01-15)

### Added

- German translation updated @timo

## 4.0.0-alpha.25 (2020-01-14)

### Added

- German translation for TOC @timo

## 4.0.0-alpha.24 (2020-01-14)

### Added

- Added customStyleMap param to Editor of draftjs @giuliaghisini
- Added Table of Contents block @robgietema

## 4.0.0-alpha.23 (2020-01-14)

### Added

- Support for indexable blocks (requires plone.restapi 6.1.0) @timo
- Set alt tag of image when selecting image in image block @robgietema

### Changes

- Avoid console warnings in AddLinkForm.jsx @tiberiuichim
- More cleaning the body classname from the current displayname view @sneridagh
- Make it possible to paste links, lists, b and i Elements into text-blocks
  @jackahl
- added option to include mp4 files from a remote source in video Block @steffenri @jackahl
- Make it possible to paste links, lists, b and i Elements into text-blocks @jackahl

## 4.0.0-alpha.22 (2020-01-04)

### Changes

- Disable all styling when copying text from another source (e.g. MS Word) into a text block @jackahl
- Avoid console warnings in QuerystringWidget @tiberiuichim
- Fix body classname based on the current content type @sneridagh

## 4.0.0-alpha.21 (2020-01-02)

### Changes

- Fix failing test on Footer due to year change in Copyright notice @sneridagh

## 4.0.0-alpha.20 (2020-01-02)

### Added

- Added translations to Portuguese @emansije

### Changes

- Fix wysiwyg widget help tag, for styling consistency @tiberiuichim
- Added more i18n improvements @macagua
- Disable submit button on save, to avoid multiple content creation @tiberiuichim
- Fix focus on sidebar @robgietema

### Internal

- Upgrade version pin for lxml, for compatibility with Python3.8
- Bump handlebars from 4.1.2 to 4.3.0 @timo

## 4.0.0-alpha.19 (2019-12-20)

### Added

- Implementation of `Portuguese (BR)` translation @LeuAlmeida
- Added translations to spanish @macagua
- Added AlbumView @wkbktill @alexbueckig

### Changes

- empty text blocks are shown as `<br />` in the view.
- Fix double fetch due to asyncConnect being executed in browser too @robgietema @sneridagh

## 4.0.0-alpha.18 (2019-12-12)

### Added

- Added CTRL+ENTER feature in text blocks by default. It creates a newline inside the same text chunk (`<p>`) @sneridagh
- Automatically switch sidebar on block change @robgietema
- Japanese translation @terapyon

### Changes

- Remove "documentDescription" class in table block @sverbois
- Added possibility to work with vimeo-videos instead of youtube-videos in the video block @wkbkhard
- Fixed Issue 1021: typing in a "wrong" URL leads to error @wkbkhard
- General toolbar more and personal tools menu CSS fixes @sneridagh
- Fix bug that lead to crashing the view when deleting the last row of a table
- Fix Select widget bug if the field has already the options in the `choices` schema, do not trigger the vocabulary request @sneridagh

### Internal

- Updated to react-select v3 @robdayz
- Fix file and link redirect views @robgietema
- Restrict moment.js locales to available languages @tisto @robgietema
- Fix history view @robgietema

## 4.0.0-alpha.17 (2019-12-03)

### Internal

- Revert eslint upgrade, because of problems with the react-app preset typescript settings @sneridagh

## 4.0.0-alpha.16 (2019-12-02)

### Changes

- Fix small CSS issues in Blocks @sneridagh

### Internal

- Pin Guillotina docker image @sneridagh
- Forked `react-helmet` since it seems unmaintained. Now it's a Named import in helpers. @sneridagh
- Update internal dependencies, fix "unmet peer dependencies" console logs by adding the peer dependencies to the local dependencies @sneridagh
- Update some dependencies, including: react-router, eslint engine and plugins/config and others @sneridagh
- Lodash improvements for decrease bundle size @sneridagh

## 4.0.0-alpha.15 (2019-11-27)

### Internal

- Export the resetContent action @pnicolli
- Fix toolbar collapsed color @sneridagh
- Minor CSS fixes @sneridagh
- Remove @testing-library/cypress dep, as it breaks builds if the internal cypress release is different than the one in this package @sneridagh

## 4.0.0-alpha.14 (2019-11-24)

### Internal

- Proper config for stylelint-prettier integration, add husky integration and scripts for stylelint, review stylelint rules @sneridagh

## 4.0.0-alpha.13 (2019-11-23)

### Internal

- Upgrade autoprefixer, remove deprecated `browsers` option, move to `browserlist` in `package.json` @sneridagh
- Upgrade react and react-dom to 16.12.0 @pnicolli
- Upgrade Cypress to 3.6.1 @timo

## 4.0.0-alpha.12 (2019-11-13)

### Changes

- Add loading animation for save and edit buttons in toolbar @pgrunewald
- Move Body class depending on content type to `App` component in order to make it available everywhere @sneridagh
- Add root class name to `Tags` component @sneridagh

## 4.0.0-alpha.11 (2019-11-08)

### Added

- Improved `ObjectBrowser` API to allow arbitrary field names and a custom `onSelectItem` @sneridagh

### Changes

- Fix icon in `TextWidget` @sneridagh
- Improve documentation for `Icon` @jackahl
- Fix ability to develop Volto itself (as and addon with a mrs.developer checkout) inside a Volto project @sneridagh

### Internal

- Add internationalization section to docs @pgrunewald

### Internal

- Set Cypress viewport width to 1280px @timo

## 4.0.0-alpha.10 (2019-10-31)

### Added

- Add Node 12 support @timo

### Changes

- Removed wrapper `p` tag from image block in edit mode for better layout purposes @sneridagh
- Make SelectWidget more robust @robgietema
- Add image to listing view @robgietema
- Fix `SchemaWidget` @robgietema
- Move styles import to a separate file @pnicolli
- Fix crash when user enters only whitespace in required fields @JeffersonBledsoe
- Fix the _real_ focus thief in new tiles @sneridagh

### Internal

- Report port number on startup @fredvd
- Retry Cypress tests two times before failing @timo
- Add waitForResourceToLoad to Cypress @timo
- Add use cases to README @timo
- Re-enabled Guillotina tests @sneridagh
- Remove Docker build from tests @sneridagh
- Removed Enzyme @pnicolli
- Added testing-library (react and cypress) @pnicolli
- Tiles -> Blocks renaming @sneridagh

## 4.0.0-alpha.9 (2019-10-09)

### Changes

- Rename `blockID` to `id` for view block components, to unify naming in edit-view @sneridagh
- Change the order of the widget decider algorithm to `choices` is chosen before the vocabularies one @sneridagh
- Remove old messages container since it's not used anymore @sneridagh
- Improve the Pastanaga Editor block wrapper container layout, deprecating the hack `.ui.wrapper > *` @sneridagh
- Fix `ArrayWidget` and amend users control panel arrays instantiations @sneridagh

## 4.0.0-alpha.8 (2019-10-05)

### Added

- Upgrade react-intl to latest version @sneridagh

### Changes

- Fix `DefaultView.jsx` warning on missing key @sneridagh

### Internal

- Enable run yarn install on git checkout and git pull in husky @sneridagh
- Disable Cypress blocks tests @sneridagh
- Remove dockerized unit tests @timo
- Add Cypress link test for text blocks @timo

## 4.0.0-alpha.7 (2019-10-02)

### Added

- Add CSS class names to block chooser @timo
- Add Cypress tests for blocks @timo @rodrigo @jakahl

### Changes

- Fix page jump on edit route @sneridagh
- Fixes to users and groups controlpanel i18n strings @nileshgulia1

### Internal

- Change the general naming of the documentation to `developer` documentation @sneridagh
- Add `blockID` prop to block tiles render view, this is handy for some blocks use cases @sneridagh
- Fix flaky Cypress test @sneridagh

## 4.0.0-alpha.6 (2019-09-30)

### Added

- Transfer focus management and keyboard navigation to the tiles engine @sneridagh

### Changes

- Slight amendment to Blocks chooser styling @sneridagh
- The default view for content types `DocumentView.jsx` has been renamed to a more appropiate `DefaultView.jsx` @sneridagh

### Internal

- Add complete husky config @sneridagh
- Add COC.md file @timo

## 4.0.0-alpha.5 (2019-09-28)

### Added

- Default body classes were enhanced to accept path and content type based ones as in Plone @sneridagh

### Changes

- Fix for checkboxes when setting `false` values, this fixes #888 @sneridagh

## 4.0.0-alpha.4 (2019-09-27)

### Added

- Added Users and Groups Controlpanel @nileshgulia1 @csenger @jackahl

### Changes

- Move the Tile Edit wrapper one level up to the tiles engine, so we can simplify how edit tiles are made @sneridagh
- Rename Metadata and Properties in sidebar to Document and Block @jackahl
- Add some German Translations @steffenri, @jackahl

### Internal

- Fix cypress test for file Upload @jackahl
- Dependencies upgrades (router, redux) @sneridagh
- Enhance Cypress createContent keyword to create files and images @timo
- Fix docs build locally @sneridagh

## 4.0.0-alpha.3 (2019-09-22)

### Added

- New tiles chooser @sneridagh

### Internal

- Fail eslint check on any warnings @timo
- Add i18n check on Travis @timo

## 4.0.0-alpha.2 (2019-09-19)

### Changes

- Fix parameter handling in Search view to avoid limiting search results with empty parameters #845 @csenger
- Fix SearchTags handling of keyword vocabulary for anonymous users @csenger
- Fix hero tile being next to a left or right aligned image @jackahl
- Fix toolbar elements showing depending on user permissions @sneridagh

## 4.0.0-alpha.1 (2019-09-17)

### Changes

- Fix test failure for `VersionOverview` component in master after release process @sneridagh
- Improve usability of login form @sneridagh
- Fix creation of image objects from image tile by adding the id as well @sneridagh
- Remove description tile from the default tiles on new content @sneridagh

### Internal

- Update release-it to fix some deprecation messages @sneridagh

## 4.0.0-alpha.0 (2019-09-13)

### Added

- Show images in Rich Text editor @rodfersou @sneridagh
- Full Pastanaga Toolbabr implementation @sneridagh
- Internal API path for containers @bloodbare
- Add toast component @sneridagh
- Add sidebar support for components @sneridagh
- Add Volto version number in control panel @nzambello
- Remove Mosaic component @tisto
- Added toast component in actions @nzambello
- Added translations to italian @nzambello
- Add table tile @robgietema
- Add image sidebar @sneridagh @gomez
- Add delete file button to file Widget @jackahl
- Add link redirect view @robgietema
- Add proper unique id to all fields, based on the fieldset and field name @sneridagh
- Add QueryString widget @robgietema @sneridagh

### Changes

- Add a delay when filtering content in folder contents so it doesn't overload backend @vangheem
- Small UX/UI fixes @sneridagh
- Fix query string search in subjects vocab field @gomez
- Removed the delete button from the title tile @pnicolli
- Rewrite sidebar @robgietma @sneridagh
- Added SidebarPortal component for easier sidebar handling @pnicolli
- Fixed tiles outline in Pastanaga editor @pnicolli
- Fix typos @balavec
- Fix warnings for boolean fields @miziodel
- Fix dropdown styling @robgietema
- Update connected-react-router and fix instantiation of the wrapper component
  to fix the sync problems with the router and the store @sneridagh
- Fix link popup in case you dismiss it without setting anything @sneridagh
- Export history in start-client.jsx for being able to import it from the project for trackers (Matomo, etc) @csenger
- Workflow change awareness on toolbar @robgietema
- Fix reordering in folder contents view and problems with previous windowing settings leaked to current one. @robgietema
- Fix remove link entity of only a part it only removes that part, not the whole entity @robgietema
- Add proper placeholder to the add link feature in the editor @sneridagh
- Fix bulk workflow change in contents view @sneridagh
- Fix regresion on uploading image to root @sneridagh
- Fix hero tile on view if image is missing @sneridagh
- Fix link to contextual contents in toolbar @sneridagh
- Add automatically the wildcard for the `SearchableText` on the @search action @sneridagh

### Internal

- Upgrade lodash to 4.17.15 @tisto
- Fix console errors on tests @sneridagh
- Add development mode for kitkoncept.voltodemo to /api plonebacked @fredvd
- Cleanup map dispatch to props @robgietema
- Fix linting warnings @robgietema
- Remove decorators @robgietema
- Pin mem to 4.0.0 @tisto
- Add razzle-plugin-bundle-analyzer @tisto
- Add bundlewatch @tisto
- Add bundlesize @tisto
- Update base buildout @sneridagh

## 3.1.0 (2019-06-14)

### Added

- Upgrade to react-redux 7.1. It includes the new official hooks for Redux. @sneridagh
- Make Login Route accessible from anywhere in path url @nileshgulia1

### Changes

- Fix basic tiles classes @rodfersou
- Fix video alignment @sneridagh

### Internal

- Upgrade handlebars to 4.1.2 @timo
- Upgrade js-yaml to 3.13.3 @timo
- Upgrade Plone api folder to 5.2rc3 @sneridagh
- Fixes for image/file fields widgets for Guillotina @sneridagh
- Fixes for Cypress Guillotina tests @sneridagh

## 3.0.4 (2019-05-30)

### Changes

### Internal

- Add cypress a11y tests. @timo
- Fix order of arguments when sending the contact form @csenger
- Fix @babel/core import on i18n script @sneridagh

## 3.0.3 (2019-05-13)

### Internal

- Use eslint-config-react-app instead of airbnb + custom config for linting @timo
- More eslint fixes for avoiding parsing errors on decorators @sneridagh
- Add 'prettier' command to check if there are any missing prettier fixes @timo
- Run 'prettier' on Travis and fail the build if there are missing prettier fixes @timo
- Add 'prettier:fix' command to fix all missing prettier fixes at once @timo
- Run 'prettier:fix' once and commit all fixes @timo
- Fix the most important violations reported with the new config @sneridagh

## 3.0.2 (2019-05-10)

### Changes

- Re-add babel-eslint because of the decorators @sneridagh
- Upgrade eslint-config-airbnb @sneridagh

## 3.0.1 (2019-05-10)

### Changes

- Small fix for a missplacement of the hooks plugin in .eslintrc @sneridagh

## 3.0.0 (2019-05-10)

### Added

- Upgrade to Razzle 3 @sneridagh
- contact-form view @cekk
- Add cypress setup for both Plone and Guillotina @sneridagh
- Update SelectWidget and ArrayWidget and related vocabularies actions/reducers
  for the breaking changes in plone.restapi 4.0.0 @davisagli @sneridagh
- Expose request on the promise returned by the api helper @csenger

### Changes

- Several dependencies upgraded @sneridagh
- Fix image of Hero Tile for images in private containers @sneridagh
- Remove enforcement of JSdocs in Volto ESlint rules @sneridagh
- Remove RobotFramework tests in favor of the cypress ones @sneridagh
- Updated docs to highlight some code changes @pigeonflight

## 2.1.3 (2019-04-17)

### Changes

- Update api folder to Plone 5.2 and Python3, update the whole story @sneridagh

## 2.1.2 (2019-04-16)

### Changes

- Fixed issue where it was not possible to click into the title tile above the
  small red bar at the beginning of the line in some browsers. @jackahl
- Docs content editing. @esteele
- Fix the folder_contents view component bby preventing the SearchableText be
  empty if you haven't typed anything in the filter fields yet. This is caused
  by the new ZCatalog in Zope 4. @sneridagh

## 2.1.1 (2019-04-04)

### Changes

- Improved search action, now it supports passing directly the arrayed values
  and it converts it to Plone's query syntax @sneridagh

- Added depth argument to the navigation action, to match the @navigation
  endpoint feature @sneridagh

## 2.1.0 (2019-04-02)

### Added

- Added specific `onMutateTile` for solely use of the Text tile when it mutates
  to another type of tile. This prevents onChangeTile do one thing that it was
  not designed lifting responsibilities from it. @sneridagh
- Added `detached` mode for the text tile so it will be able to render outside
  the Volto editor without all the tile mutation machinery and the keyboard
  handlers. @sneridagh

### Changes

- Small improvements to the internal tile api @sneridagh
- Fix for tiles having dialog box `ENTER` key captured by global tile onKeyDown
  handler, then creating a tile instead of the intended behavior. @sneridagh
- Fix small CSS and import issues @sneridagh
- Fix Invalid Redraft object warning on console @sneridagh

## 2.0.0 (2019-03-25)

### Added

- Tiles refactor, move keyboard listeners and Trash icon to Tiles HOC
  @sneridagh
- Fix tiles navigation via cursors on all available tiles @sneridagh
- Fix UX on HTML tile when navigating via cursors @sneridagh
- Add ability to add new text tile via `Enter` key @sneridagh
- Add create new text tile at the bottom on adding tiles @sneridagh
- Improve general UX on tiles creation and focusing on creation @sneridagh

## 1.10.0 (2019-03-25)

### Added

- Fix npm package generation @sneridagh

## 1.9.0 (2019-03-25)

### Added

- Upgraded to React 16.8 (the one with hooks) @sneridagh
- Upgraded to the recent (at last) released react-redux 7.0beta.0, this release
  solves the performance issues with the new React context and leave them ready
  for the upcoming useRedux hook. This release supports the latest React 16.8.
  @sneridagh
- Upgraded to the latest Router and react-router-config and other required
  upgrades. @sneridagh
- Upgraded to latest redux-connect @sneridagh
- Upgraded to latest razzle @sneridagh

## 1.8.3 (2019-03-21)

### Changes

- Several CSS fixes @sneridagh
- Add several icons @sneridagh

## 1.8.2 (2019-03-21)

### Changes

- Improve README @svx @fredvd
- Pretty Pastanaga UI .overrides stylesheets @sneridagh

## 1.8.1 (2019-03-19)

### Changes

- Fix hero tile View styling, add definitive icon @sneridagh
- Fix the trash icon on the tiles that was displaced by other change @sneridagh

## 1.8.0 (2019-03-15)

### Added

- Hero Tile @nileshgulia1 @sneridagh

### Changes

## 1.7.0 (2019-03-03)

### Added

- Add image-zooming functionality @nileshgulia1

### Changes

- Fix image float/left right on image tile @timo

## 1.6.1 (2019-03-01)

### Changes

- Fix a regression on the add tile button alignment @sneridagh

## 1.6.0 (2019-03-01)

### Added

- Set image width in Volto editor to 50% for images that float left/right @timo
- Ability to navigate through the existing tiles with the cursors. @sneridagh
- HTML Tile for Volto Editor with preview and code prettifier
  @ajayns @nileshgulia1 @sneridagh
- Add error log in the SSR console @sneridagh
- Add SSR helper to get resources (images/files) from the server using the API
  headers. This fixes the missing images on non published resources while editing @sneridagh
- Fix not valid `<div>` tag nested in a `<p>` tag error on tiles and wysiwyg
  field @sneridagh

### Changes

- Clean .variables files from Pastanaga theme since they are already applied by
  the theming engine from the default theme. @sneridagh
- Fix edit forms with richtext fields coming from SSR @sneridagh

## 1.5.2 (2019-02-20)

### Changes

- Fix external images on Image Tile render @sneridagh
- Several fixes reagarding correctness of markup @sneridagh
- Issue with dangerouslySetInnerHTML RichText fields on first SSR load
  apparently fixed (due to the above fix) :) @sneridagh

## 1.5.1 (2019-02-19)

### Changes

- Fix build for projects created with `create-volto-app` @sneridagh
- Fix link view @nileshgulia1

## 1.5.0 (2019-02-19)

### Added

- Add Google Maps tile @nileshgulia1
- Add support for extending Semantic UI Styling using the semantic theme engine
  by adding an `extras` file that can bring into the engine new styles coming
  from third party libs or custom styling code for the local theme. Being this
  applied after semantic default styling, it's the last one in the styling
  cascade easing the develop of new themes. @sneridagh

### Changes

- Prevent Volto hit the @types endpoint (via its action, getTypes()) if the
  user is not authenticated, since it's useless and always returns a 401
  @sneridagh
- Improved readme @sneridagh
- New logo for the Pastanaga Theme referring to Volto and fix header @sneridagh
- Disable SocialSharing component by default @sneridagh
- Fix login tab index for username autofocus and password after tab @sneridagh
- Fix hamburgers menu @sneridagh
- Fix CSS sourcemaps by make postcss stage to accept other stages sourcemaps
  @sneridagh
- Add IE11 fixes by pinning some packages, added documentation in `docs` about
  it and how to deal with it. However, compatibility is _NOT_ guaranteed in
  future Volto releases @sneridagh
- Fix Header scroll in Firefox in case that there are lot of items in the nav
  @sneridagh
- Add supported browsers in README @sneridagh
- Default tile position to center for all the existing tiles @sneridagh

## 1.4.0 (2019-02-15)

### Added

- Add the ability to detect the edit Plone Site hack for show the tiles editor
  on Plone site edit @sneridagh

### Changes

- Bring back the stylelint default configs for IDEs @sneridagh
- Improve ESlint resolvers for special paths (@plone/volto and ~), so IDEs do
  not complain any more with no-unresolved active @sneridagh
- Fix the floating image problem in the Volto Editor @sneridagh

## 1.3.0 (2019-02-13)

### Added

- Improve the definitions of the view/edit tiles components for better
  extensibility. This might be a BREAKING change if you have already used the
  old way to extend/add more tiles, please update to the new one @sneridagh

### Changes

- Fix Travis unit testing false green @sneridagh
- Fix bad Proptype for location in ScrollToTop component @sneridagh

## 1.2.1 (2019-02-04)

### Changes

- Bring back the scroll to top on every route change feature @sneridagh
- Loosen node version, allow LTS (v8 and v10) @sneridagh

## 1.2.0 (2019-01-22)

### Added

- be able to specify custom headers in actions @vangheem
- fix icons used in contents @vangheem
- be able to work with mr.developer @vangheem
- add alias `@plone/volto-original` and `@package` webpack aliases @vangheem
- add `errorViews` configuration @vangheem

### Changes

- Upgrade to Node 10.14.2 @nileshgulia1

## 1.1.0 (2018-12-24)

### Changes

- Fix edit on root @robgietema
- Fix sharing @robgietema
- Fix error on token renew @robgietema
- Fix layout fieldname @bloodbare
- First field in a form will get the focus @robgietema
- Fix download file links @mikejmets
- Fix HMR missbehaving on both server and client @sneridagh
- Upgrade to Node 8.14.0 @timo
- Relaxed node runtime constraints @sneridagh
- Update to latest LESS and Semantic UI version @sneridagh

## Added

- Add .gitattributes file to avoid most Changelog merge conflicts @pnicolli
- Buildout for Python 3 @pbauer
- Websockets support @robgietema
- Subrequests to search and get content actions @robgietema
- Add logos @sneridagh @albertcasado

## 1.0.0 (2018-10-31)

### Added

- Training documentation link @robgietema

## 0.9.5 (2018-10-24)

### Changes

- Fix API*PATH variable using RAZZLE* prefix instead @sneridagh
- Fix FUOC (flash of unstyled content) in production mode @sneridagh
- Fix missing buttons on RichText tiles @sneridagh
- Fix original external `overrides.css` position in the cascade was applied in
  the wrong order in site.overrides in Pastanaga theme @sneridagh
- Fatten widget config @robgietema

## 0.9.4 (2018-10-10)

### Changes

- Fix tags layout @robgietema @jaroel
- Fix imports of views, widgets and tiles @robgietema @jaroel

## 0.9.3 (2018-10-10)

### Changes

- Fix logo import path @robgietema @jaroel

## 0.9.2 (2018-10-10)

### Added

- Automatic customization imports for images @robgietema @jaroel

## 0.9.1 (2018-10-10)

### Added

- Automatic customization imports @robgietema @jaroel

## 0.9.0 (2018-10-04)

### Changes

- Renamed package to Volto @robgietema

## 0.8.3 (2018-10-03)

### Changes

- Fix i18n script for dependency @robgietema

## 0.8.2 (2018-10-03)

### Changes

- Move all dev dependencies to dependencies @robgietema

## 0.8.1 (2018-10-03)

### Changes

- Fix compiling when used as a library @robgietema
- Fix buildout security issue @robgietema

## 0.8.0 (2018-10-03)

### Added

- Move the webpack config to Razzle @sneridagh @robgietema
- Upgrade React to 16.5 @tisto
- Upgrade React to 16.4.2 to fix a server-side vulnerability @tisto
- Support for base url @bloodbare

### Changes

- Merged Guillotina and Plone robot tests @bloodbare
- Don't reset total and batching on pending search @robgietema

## 0.7.0 (2018-07-31)

### Added

- Add Pastanaga Icon System @sneridagh
- Support for nested schemas @robgietema
- New block on return in editor @robgietema
- Added 404 page on page not found @robgietema
- Custom tiles support @sneridagh
- Add full register/password reset views @sneridagh
- Make the list block types configurable @robgietema
- Add all missing German translations @tisto
- Add helper `BodyClass` for appending classes to the `body` tag from View components @sneridagh
- Add Tiles support for Guillotina CMS @bloodbare @sneridagh @robgietema

### Changes

- Pastanaga Editor look and feel improvements and polishment @sneridagh @albertcasado
- Refactor configuration of routes, views and widgets for extensibility @sneridagh @davilima6
- Fix view name class in body element @sneridagh @davilima6
- Refactor actions @robgietema
- Store text tile data in json @robgietema
- Fixed tile add menu @robgietema
- Change to use root import on all config calls @sneridagh
- Fix CSS on tile image view @sneridagh
- Fix broken CSS on alignments left/right @sneridagh
- Tile DE literals translations @sneridagh
- Pass location as prop to child views in main View component in case we require it in some views @sneridagh
- Fix computed displayName from add-display-name Babel plugin for connected components @sneridagh

## 0.6.0 (2018-07-14)

### Added

- Schema widget @robgietema
- User actions and reducers @robgietema
- Group actions and reducers @robgietema
- Roles actions and reducers @robgietema
- Move combineReducers to the store creation level. This will ease the extensibility of them in Plone-React apps. @sneridagh
- Upgrade node to 8.11.2 @sneridagh
- Basic user listing in users controlpanel @robgietema
- Add missing FileWidget import @sneridagh
- Option to delete tiles @robgietema
- Option to add tiles @robgietema
- Image tiles in editor @robgietema
- Align images in editor @robgietema
- Video tiles in editor @robgietema
- Video tiles in editor @robgietema
- Sitemap.xml.gz view @robgietema
- Upload image indicator @robgietema
- Video tile view @robgietema
- Option to reset image @robgietema
- Drag and drop to reorder tiles @robgietema
- Enhanced DraftJS AnchorLink Plugin @robgietema @sneridagh
- Added the configuration required in Webpack config to load CSS modules in the project, required by DraftJS AnchorLink plugin @sneridagh

### Changes

- Styled wysiwyg widget @robgietema
- Switch from accordion to tabs in forms @robgietema
- Upgrade to Node 8.11.1 @tisto
- Replace ExtractionTextCSSPlugin with the new mini-css-extract-plugin, adapt universal-webpack config @sneridagh
- Removed flow @robgietema
- Fix eslint prettier config @robgietema
- Refactor actions and reducers to match restapi docs naming @robgietema
- Fix site root api calls @robgietema
- Change visual editor to use the new tiles api @robgietema
- Fix bug with wrong order input @robgietema
- Fix several problems in the DraftJS AnchorLink plugin @sneridagh
- Replace DraftJS Toolbar plugin H1/H2 buttons for H2/H3 ones @sneridagh
- Sync i18n translations @sneridagh
- Fix CSS .input class scope intrusion on the project introduced by the AnchorLink plugin fork @sneridagh
- Improve search reducer by adding the batching property in the search store.
- Upgrade to Node 8.11.3 @sneridagh

## 0.5.0 (2018-03-23)

### Added

- Pastanaga theme package @jaroel, @robgietema
- Registry based controlpanels @robgietema
- Component documentation @robgietema
- Component documentation examples @VaysseB
- Folder listing view @cekk
- Prettier docs for SCA @nileshgulia1
- Comments, email notification and vocabularies reducers @robgietema
- Pastanaga theme @robgietema
- Pastanaga manage views @robgietema
- Pastanaga theme views @robgietema
- Callout styling to draftjs @robgietema
- Image, file and news item view @robgietema
- Social sharing @robgietema
- Commenting @robgietema
- Tags @robgietema
- Renew login token when almost expired @robgietema
- Cctions reducers @robgietema
- Error reporting with Sentry support on client (default ErrorBoundary), server and Redux middleware @sneridagh
- Tiles reducers @robgietema
- Context aware toolbar @robgietema
- Hamburger menu navigation on mobile @sneridagh
- Editor prototype @robgietema
- Support for null values when reseting a field value @sneridagh

### Changes

- Update plone api versions / bootstrap process @thet
- Fix textwidget proptypes @cekk
- Remove phantomjs @tulikavijay
- Upgrade to node 8 @robgietema
- Switched to draft js plugins editor @robgietema
- Fix paragraph styling in draftjs @robgietema
- Fixed summary and tabular views @robgietema
- Upgrade to React 16 @sneridagh
- Upgrade to Webpack 4 @sneridagh
- Review chunks policy. Keep it in sync with Webpack 4 policy with entrypoint bundles @sneridagh
- Merged block styling to inline toolbar @robgietema
- Actions aware toolbar @sneridagh
- Fix permissions on the toolbar display menu @sneridagh

## 0.4.0 (2017-05-03)

### Added

- Adding tiles @robgietema
- Handle different tiles @robgietema
- Resizing of tiles @robgietema
- Deletion of tiles @robgietema
- Drag and drop of tiles @robgietema
- Basic mosaic grid rendering @robgietema
- Form validation @robgietema
- Notification messages @robgietema

### Changes

- Updated to new history api @robgietema
- Deselect on click outside grid @robgietema

## 0.3.0 (2017-04-29)

### Added

- Personal information @robgietema
- Change password @robgietema
- Password widget @robgietema
- I18n support and translations @robgietema
- Personal preferences @robgietema
- Rename action @robgietema

### Changed

- Fixed favicon @robgietema

## 0.2.0 (2017-04-27)

### Added

- Batch state in folder contents @robgietema
- Batch properties in folder contents @robgietema
- Batch tags in folder contents @robgietema
- Batch rename in folder contents @robgietema
- Diff view @robgietema
- Add revert to version @robgietema
- Create view revision page @robgietema
- Create history list view @robgietema
- Sorting of items in folder contents @robgietema
- Upload files in folder contents @robgietema
- Ordering of columns in folder contents @robgietema
- Ordering of items in folder contents @robgietema
- Pagination in folder contents @robgietema
- Delete in folder contents @robgietema

### Changed

- Only show add and contents in the toolbar when folderish @robgietema
- Diff on words not chars @robgietema

## 0.1.0 (2017-04-20)

### Added

- Folder contents @robgietema
- Sharing menu and view @robgietema
- Display menu @robgietema
- Semantic UI integration @robgietema
- Basic Mosaic setup @robgietema
- Basic Server Side Rendering @robgietema
- Search view @robgietema
- Actions menu @robgietema
- Workflow menu @robgietema
- Add menu @robgietema
- Add and edit forms including widgets @robgietema
- Basic components (navigation, toolbar, breadcrumbs etc) @robgietema
- Authentication including login / logout @robgietema
- Setup build environment @robgietema
