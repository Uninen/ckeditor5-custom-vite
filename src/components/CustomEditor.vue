<script setup>
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage'
import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import Link from '@ckeditor/ckeditor5-link/src/link'
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage'
import List from '@ckeditor/ckeditor5-list/src/list'
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'

class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  ImageInsert,
  AutoImage,
  LinkImage,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  TableToolbar,
]

const editorConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'blockQuote',
      '|',
      'insertImage',
      'undo',
      'redo',
    ],
  },
  image: {
    // Configure the available styles.
    styles: ['full', 'alignLeft', 'alignCenter', 'alignRight'],

    // Configure the available image resize options.
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Original',
        value: null,
      },
      {
        name: 'resizeImage:50',
        label: '50%',
        value: '50',
      },
      {
        name: 'resizeImage:75',
        label: '75%',
        value: '75',
      },
    ],

    // You need to configure the image toolbar, too, so it shows the new style
    // buttons as well as the resize buttons.
    toolbar: [
      // 'imageStyle:full',
      'imageStyle:alignLeft',
      'imageStyle:alignCenter',
      'imageStyle:alignRight',
      '|',
      'resizeImage',
      '|',
      'imageTextAlternative',
      'linkImage',
    ],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
}

const editorData = ref('<p>Hello from Custom CKEditor 5!</p>')
const editor = ClassicEditor
</script>

<template>
  <div class="document-container">
    <ckeditor v-model="editorData" :editor="editor" :config="editorConfig"></ckeditor>
  </div>
</template>
