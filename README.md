# CHEMeDATA-maker

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

Add CHEMeDATA to documents.

## Goal

Facilitate the association of spectroscopic data (in the form of text) to chemical structures.
In the annexe of many PhD thesis, the spectroscopic data are shown next to the structure.

![Image from phd thesis with molecule and spectroscopic data](images/imagethesis.png)

This tool will show, next to a molecules (which structure [were extracted using OSRA](https://chemedata.github.io/fixingmolfiles/)) the text (which was extracted using pdfjs-dist) so that the user can select (whith some help looking for keywords such as 1H-NMR, etc.) the text of the assignement.

This could be save as NMReDATA, *i.e.* a format associating the structure with NMR data.

Optionally, the user should be able to drop NMR, IR, etc. spectra... or Mnova (or other) files to add spectra and assignement.

Optionally, the user could assign the molecules, it was not done already in the previous step.

Finally the data could be saved on (say) Zenodo.

## Installation

`$ npm i CHEMeDATA-maker`

## Usage

```js
import library from 'CHEMeDATA-maker';

const result = library(args);
// result is ...
```

## [API Documentation](https://CHEMeDATA.github.io/CHEMeDATA-maker/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/CHEMeDATA-maker.svg
[npm-url]: https://www.npmjs.com/package/CHEMeDATA-maker
[ci-image]: https://github.com/CHEMeDATA/CHEMeDATA-maker/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/CHEMeDATA/CHEMeDATA-maker/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/CHEMeDATA-maker.svg
[download-url]: https://www.npmjs.com/package/CHEMeDATA-maker


## Initial creation of node module 
Starting point using[create-a-new-project](https://github.com/cheminfo/generator-cheminfo/blob/master/START.md#create-a-new-project)

