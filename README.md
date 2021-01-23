[Pure CSS HTML Checkbox](https://neodigm.github.io/css_checkbox/)

Pure CSS checkbox that can be color branded. Tested on mobile, tablet, laptop, and desktop.

'''CSS
/* Checkbox styles Begin */
.prod-sec__fbt .js-selectall {
    position: absolute;
    border: solid 1px #444;
    opacity: 0;
  }
.prod-sec__fbt .js-selectall + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }
.prod-sec__fbt .js-selectall + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
   border: solid 1px #444;
  }
.prod-sec__fbt .js-selectall:checked + label:before  {
    background: #30619a;
  }
.prod-sec__fbt .js-selectall:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }
.prod-sec__fbt .js-selectall:checked + label:after {
    background: white;
}
.prod-sec__fbt .js-selectall:checked + label:after {
    content: "";
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 3px;
    height: 3px;
    box-shadow: 3px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
/* Checkbox styles End */
'''
