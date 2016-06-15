sg-react-components
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-react-components
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-react-components
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-react-components.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-react-components
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-react-components.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/sg-react-components/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-react-components
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-react-components.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-react-components.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-react-components
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-react-components.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-react-components
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-react-components.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

React components for SUGOS project.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install sg-react-components --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Demo.md.hbs" Start -->

<a name="section-doc-guides-02-demo-md"></a>
Demo
-----

[Live demo][demo_url] is hosted on GitHub Pages.

<!--
[![Demo Image](./doc/images/screenshot.png)][demo_url]
-->

[demo_url]: http://realglobe-Inc.github.io/sg-react-components/demo/demo.html


<!-- Section from "doc/guides/02.Demo.md.hbs" End -->

<!-- Section from "doc/guides/03.Usage.md.hbs" Start -->

<a name="section-doc-guides-03-usage-md"></a>
Usage
---------

```jsx
'use strict'

import React from 'react'
import {
  SgThemeStyle
} from 'sg-react-components'

const DOMINANT_COLOR = '#FFC533'

const ExampleComponent = React.createClass({
  render () {
    return (
      <div>
        <SgThemeStyle dominant={ DOMINANT_COLOR }/>
      </div>
    )
  }
})


```



<!-- Section from "doc/guides/03.Usage.md.hbs" End -->

<!-- Section from "doc/guides/04.Components.md.hbs" Start -->

<a name="section-doc-guides-04-components-md"></a>
Components
-----


### SgAlbum

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| width | number | 300 | | Width(px) of a image. |
| imageList | array | [] | | List of image src. |
| thumbnailCol | number | 4 | | Number of images per 1 row in the thumbnail. |
| thumbnailSelectedColor | string | &#x27;yellow&#x27; | | Border color of selected image in the thumbnail. |
| onChange | func |  | | Called when update. Argument is index of imageList. |

### SgBody

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### SgButton

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### SgHead

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### SgHeader

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### SgHeart

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| width | number | 44 | |  |
| height | number | 44 | |  |
| heartRate | number | 60 | |  |
| id | string |  | |  |

### SgHtml

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### SgKinectFrame

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| bodies | array |  | | Body frame data from kinect |
| width | number | depthSpace.BOUND_WIDTH | | Component width |
| height | number | depthSpace.BOUND_HEIGHT | | Component height |
| frameWidth | number | 4 | | Width of frames |
| jointRadius | number | 3 | | Radius of joint |
| scale | number | 2 | | Scale rate of canvas |
| alt | string | &#x27;NO BODY FOUND&#x27; | | Alt message when no body found |
| colorizer | func | colorHelper.uniqueColorizer(&#x27;#CCCC33&#x27;) | | Colorizer function |

### SgMain

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### SgMicrophone

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| width | number | 44 | |  |
| height | number | 44 | |  |
| on | bool | false | |  |

### SgPage

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

### SgSwitch

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| width | number |  | | Width(px) of a switch. |
| on | bool |  | | The state of on/off. |
| onTap | func |  | | Function on tap. |
| onTitle | string |  | |  |
| offTitle | string |  | |  |
| highlightColor | string |  | |  |
| backgroundColor | string |  | |  |
| borderColor | string |  | |  |
| handleSize | number |  | |  |

### SgThemeStyle

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| style | object | {} | |  |
| dominant | string | ApStyle.DEFAULT_HIGHLIGHT_COLOR | |  |

### SgVideo

**Props**

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| src | string|arrayOf |  | | Video source URL |
| playerRef | func | function() {} | | Register player |



<!-- Section from "doc/guides/04.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sg-react-components/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [apeman](https://github.com/apeman-labo/apeman)
+ [apeman-react-labo](https://github.com/apeman-react-labo)
+ [React](https://facebook.github.io/react/)

<!-- Links End -->
