/*!
 * froala_editor v2.6.5 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
/**
 * Turkish
 */

$.FE.LANGUAGE['tr'] = {
  translation: {
    // Place holder
    "Type something": "Bir Şey Yaz",

    // Basic formatting
    "Bold": "Kalın",
    "Italic": "İtalik",
    "Underline": "altı Çizili",
    "Strikethrough": "Üstü Çizili",

    // Main buttons
    "Insert": "Ekle",
    "Delete": "Sil",
    "Cancel": "İptal",
    "OK": "Tamam",
    "Back": "Geri",
    "Remove": "Kaldır",
    "More": "Daha",
    "Update": "Güncelleştir",
    "Style": "Stil",

    // Font
    "Font Family": "Yazı tipleri",
    "Font Size": "Yazı boyutu",

    // Colors
    "Colors": "Renkler",
    "Background": "Arkaplan",
    "Text": "Metin",

    // Paragraphs
    "Paragraph Format": "Paragraf Biçimi",
    "Normal": "Normal",
    "Code": "Kod",
    "Heading 1": "Başlık 1",
    "Heading 2": "Başlık 2",
    "Heading 3": "Başlık 3",
    "Heading 4": "Başlık 4",

    // Style
    "Paragraph Style": "Paragraf stili",
    "Inline Style": "Çizgi stili",

    // Alignment
    "Align": "Hizala",
    "Align Left": "Sola hizala",
    "Align Center": "Ortala",
    "Align Right": "Sağa hizala",
    "Align Justify": "iki yana yasla",
    "None": "Hiç biri",

    // Lists
    "Ordered List": "Numaralı liste",
    "Unordered List": "Simgeli liste",

    // Indent
    "Decrease Indent": "Girintiyi azalt",
    "Increase Indent": "Girintiyi arttır",

    // Links
    "Insert Link": "Bağlantı ekle",
    "Open in new tab": "Yeni sekmede aç",
    "Open Link": "Bağlantıyı aç",
    "Edit Link": "Bağlantıyı düzenle",
    "Unlink": "Bağlantıyı kaldır",
    "Choose Link": "Bağlantı seç",

    // Images
    "Insert Image": "Resim ekle",
    "Upload Image": "Fotoğraf Yükle",
    "By URL": "URL'ye göre",
    "Browse": "Gözat",
    "Drop image": "Resmi sürükle",
    "or click": "ya da tıklayın",
    "Manage Images": "Resimleri Yönet",
    "Loading": "Yükleniyor",
    "Deleting": "Sil",
    "Tags": "Etiketler",
    "Are you sure? Image will be deleted.": "Emin misin? Resim silinecektir.",
    "Replace": "Değiştir",
    "Uploading": "Yükle",
    "Loading image": "Resim yükleniyor.",
    "Display": "Göster",
    "Inline": "Çizgi",
    "Break Text": "Metni kes",
    "Alternate Text": "Alternatif metin",
    "Change Size": "Boyutu değiştir",
    "Width": "Genişlik",
    "Height": "Yükseklik",
    "Something went wrong. Please try again.": "Bir şeyler yanlış gitti. Lütfen tekrar deneyin.",

    // Video
    "Insert Video": "Video ekle",
    "Embedded Code": "Gömülü kod",

    // Tables
    "Insert Table": "Tablo ekle",
    "Table Header": "Tablo başlığı",
    "Remove Table": "Tablo kaldır",
    "Table Style": "Tablo stili",
    "Horizontal Align": "Yatay hizalama",
    "Row": "Satır",
    "Insert row above": "Yukarı yeni satır ekle",
    "Insert row below": "Aşağı yeni satır ekle",
    "Delete row": "Satır sil",
    "Column": "Sütın",
    "Insert column before": "Öncesine yeni sütun ekle",
    "Insert column after": "Sonrasına yeni sütun ekle",
    "Delete column": "Sütunu sil",
    "Cell": "Hücre",
    "Merge cells": "Hücreleri birleştir",
    "Horizontal split": "Yatay bölme",
    "Vertical split": "Dikey  bölme",
    "Cell Background": "Hücre arka planı",
    "Vertical Align": "Dikey hizalama",
    "Top": "üst",
    "Middle": "Orta",
    "Bottom": "Alt",
    "Align Top": "üst hizalama",
    "Align Middle": "Orta hizalama",
    "Align Bottom": "Alta hizalama",
    "Cell Style": "Hücre stili",

    // Files
    "Upload File": "Dosya Yükle",
    "Drop file": "Dosya Sürükle",

    // Emoticons
    "Emoticons": "İfadeler",
    "Grinning face": "Sırıtan yüz",
    "Grinning face with smiling eyes": "32 diş gülen surat",
    "Face with tears of joy": "Gülmekten yarılan, yerlere yatan",
    "Smiling face with open mouth": "Ağzı açık gülümseyen yüz",
    "Smiling face with open mouth and smiling eyes": "Açık ağız ve gülümseyen gözlerle gülümseyen yüz",
    "Smiling face with open mouth and cold sweat": "Soğuk terler döken surat",
    "Smiling face with open mouth and tightly-closed eyes": "Açık ağız ve sıkı kapalı gözlerle gülümseyen yüz",
    "Smiling face with halo": "Halo ile gülümseyen yüz",
    "Smiling face with horns": "Boynuzlu gülümseyen yüz",
    "Winking face": "Göz kırpıyor",
    "Smiling face with smiling eyes": "Gülümseyen gözlerle gülümseyen yüz",
    "Face savoring delicious food": "Lezzetli yemeklerin tadını çıkaran yüz",
    "Relieved face": "Rahatlamış yüz",
    "Smiling face with heart-shaped eyes": "Kalp şeklinde gözlerle gülümseyen yüz",
    "Smiling face with sunglasses": "Güneş gözlüğü ile gülümseyen yüz",
    "Smirking face": "Hınzır yüz",
    "Neutral face": "Tarafsız yüz",
    "Expressionless face": "Ifadesiz yüz",
    "Unamused face": "Yaralanmış yüz",
    "Face with cold sweat": "Blöf yüz",
    "Pensive face": "Solgun yüz",
    "Confused face": "Karışık yüz",
    "Confounded face": "Çarpıtılmış yüz",
    "Kissing face": "Öpücük",
    "Face throwing a kiss": "Kapli öpücük",
    "Kissing face with smiling eyes": "Gülümseyen gözlerle öpücük",
    "Kissing face with closed eyes": "Kapalı gözlerle öpücük",
    "Face with stuck out tongue": "Dil çıkaran yüz",
    "Face with stuck out tongue and winking eye": "Tek gözü kapalı dil çıkaran yüz",
    "Face with stuck out tongue and tightly-closed eyes": "İki gözü kapalı dil çıkaran yüz",
    "Disappointed face": "Hayal kırıklığı",
    "Worried face": "Endişeli yüz",
    "Angry face": "Kızgın Surat",
    "Pouting face": "Kırmızı kızgın surat",
    "Crying face": "Ağlayan yüz",
    "Persevering face": "Sabırsız yüz",
    "Face with look of triumph": "Zafer!",
    "Disappointed but relieved face": "Hayal kırıklığına uğramış ama rahatlamış yüz",
    "Frowning face with open mouth": "Ağzı açık şaşırmış yüz",
    "Anguished face": "Kederli yüz",
    "Fearful face": "Korkunç yüz",
    "Weary face": "Yorgun yüz",
    "Sleepy face": "Uykulu yüz",
    "Tired face": "Aşırı derecede üzülmüş yüz",
    "Grimacing face": "Ürkütücü yüz",
    "Loudly crying face": "yüksek sesle ağlayan yüz",
    "Face with open mouth": "Açık ağızla şaşırmış yüz",
    "Hushed face": "Dingin yüz",
    "Face with open mouth and cold sweat": "Soğuk ter döken yüz",
    "Face screaming in fear": "Korkuyla haykıran yüz",
    "Astonished face": "Şaşkın yüz",
    "Flushed face": "Kızarık yüz",
    "Sleeping face": "Uyuyan yüz",
    "Dizzy face": "Baş döndüren yüz",
    "Face without mouth": "Ağızsız yüz",
    "Face with medical mask": "Maskeli yüz",

    // Line breaker
    "Break": "Kırılma",

    // Math
    "Subscript": "Alt simge",
    "Superscript": "üst simge",

    // Full screen
    "Fullscreen": "Tam ekran",

    // Horizontal line
    "Insert Horizontal Line": "Yatay çizgi ekleme",

    // Clear formatting
    "Clear Formatting": "Biçimlendirmeyi temizle",

    // Undo, redo
    "Undo": "Geri Al",
    "Redo": "Yinele",

    // Select all
    "Select All": "Tümünü Seç",

    // Code view
    "Code View": "Kodu Göster",

    // Quote
    "Quote": "Alıntı Yap",
    "Increase": "Arttır",
    "Decrease": "Azalt",

    // Quick Insert
    "Quick Insert": "Hızlı ekle"
  },
  direction: "ltr"
};

}));
