/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js';

class TitleEditor extends InlineEditor {}
class ContentEditor extends InlineEditor {}

// Plugins to include in the build.
ContentEditor.builtinPlugins = [
  RemoveFormat,
  Underline,
  Alignment,
  BlockQuote,
  Bold,
  CodeBlock,
  Essentials,
  FontBackgroundColor,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  MediaEmbed,
  MediaEmbedToolbar,
  Paragraph,
  SimpleUploadAdapter,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
];
ContentEditor.defaultConfig = {
  placeholder: "Type your post content here",
  toolbar: {
    items: [
      "undo",
      "redo",
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "subscript",
      "superscript",
      "alignment",
      "|",
      "fontBackgroundColor",
      "horizontalLine",
      "outdent",
      "indent",
      "bulletedList",
      "numberedList",
      "blockQuote",
      "insertTable",
      "|",
      "link",
      "imageInsert",
      "mediaEmbed",
      "codeBlock",
      "|",
      "removeFormat",
    ],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:full",
      "imageStyle:side",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
  image: {
    styles: ["alignLeft", "alignCenter", "alignRight"],

    resizeOptions: [
      {
        name: "resizeImage:original",
        label: "Original",
        value: null,
      },
      {
        name: "resizeImage:50",
        label: "50%",
        value: "50",
      },
      {
        name: "resizeImage:75",
        label: "75%",
        value: "75",
      },
    ],

    toolbar: [
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
      "|",
      "resizeImage",
      "|",
      "imageTextAlternative",
    ],
  },
  simpleUpload: {
    licenseKey: '',
    uploadUrl: 'http://example.com',
    withCredentials: false,
    headers: {
      'X-CSRF-TOKEN': 'CSRF-Token',
      Authorization: 'Bearer <JSON Web Token>'
    }
  },
  licenseKey: "",
};

// Plugins to include in the build.
TitleEditor.builtinPlugins = [
  Bold,
  Essentials,
  Heading,
  Italic,
  Link,
  Paragraph,
];
TitleEditor.defaultConfig = {
  placeholder: "Enter the title here",
  toolbar: {
    items: ["heading", "|", "bold", "italic", "link"],
  },
  language: "en",
  licenseKey: "",
};
export default {
  TitleEditor, ContentEditor
}
