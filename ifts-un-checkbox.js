let elTmpl = document.createElement("template")
elTmpl.innerHTML = `
<style>
    /* @import url('./unity_tokens.css'); */

    :host {}  /* Container Shadow Root */
    :host-context(ifts-un-checkboxgroup) {} /* Ancestor */
    ::slotted( * ){   }  /* target slotted content - applied before global css  */
</style>

<style>

  .l-unityCheckbox .UnityCheckbox {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    color: var(--un-checkbox-label-color);
    gap: var(--un-checkbox-space-gap);
    padding: var(--un-checkbox-space-vertical) var(--un-checkbox-space-horizontal);
    font-family: var(--un-checkbox-typography-label-font-family);
    font-size: var(--un-checkbox-typography-label-font-size);
    font-weight: var(--un-checkbox-typography-label-font-weight);
    line-height: var(--un-checkbox-typography-label-line-height);
    letter-spacing: var(--un-checkbox-typography-label-letter-spacing);
  }

  .l-unityCheckbox .UnityCheckboxCheck {
    height: var(--un-checkbox-check-size-height);
    width: var(--un-checkbox-check-size-width);
    border-radius: var(--un-checkbox-check-border-radius);
    box-sizing: border-box;
    text-align: center;
  }

  .l-unityCheckbox .UnityCheckboxCheck[data-checked=true] {
    border: var(--un-checkbox-check-unchecked-border-default-width) var(--un-checkbox-check-checked-border-default-style) var(--un-checkbox-check-unchecked-border-default-color);
    color: var(--un-checkbox-check-checked-color-default);
    
    QQQQbackground-color: var(--un-checkbox-check-checked-color-background-default);
    background-color: var( --un-color-purposeful-dark-purple );
  }

  .l-unityCheckbox .UnityCheckboxCheck[data-checked=false] {
    border: var(--un-checkbox-check-unchecked-border-default-width) solid var(--un-checkbox-check-unchecked-border-default-color);
    color: var(--un-checkbox-check-unchecked-color-default);
    background-color: var(--un-checkbox-check-unchecked-color-background-default);
  }

  .l-unityCheckbox .UnityCheckboxCheck[data-checked=false].UnityCheckboxCheck_interactive:where(:hover) {
    border: var(--un-checkbox-check-unchecked-border-hover-width) var(--un-checkbox-check-unchecked-border-hover-style) var(--un-checkbox-check-unchecked-border-hover-color);
    color: var(--un-checkbox-check-unchecked-color-hover);
    background-color: var(--un-checkbox-check-unchecked-color-background-hover);
  }

  .l-unityCheckbox .un-disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  .l-unityCheckbox span.UnityCheckboxCheck:not([data-checked=true]) i { visibility: hidden; }
  .l-unityCheckbox span.UnityCheckboxCheck:not([data-checked=true]) svg { visibility: hidden; }

  .l-unityCheckbox .UnityCheckboxCheck_interactive { cursor: pointer; }

  /*  AbbVie Core AMPM  */
  [data-colorscheme='light'] [data-checked="true"] .fst-un__core-bg--blue   { background-color: var( --un-color-abbvie-dark-blue );}
  [data-colorscheme='light'] [data-checked="true"] .fst-un__core-bg--purple { background-color: var( --un-color-purposeful-dark-purple );}
  [data-colorscheme='light'] [data-checked="true"] .fst-un__core-bg--cobalt { background-color: var( --un-color-curious-dark-cobalt );}
  [data-colorscheme='light'] [data-checked="true"] .fst-un__core-bg--red    { background-color: var( --un-color-remarkable-dark-red );}
  [data-colorscheme='light'] [data-checked="true"] .fst-un__core-bg--green  { background-color: var( --un-color-global-dark-green );}
  [data-colorscheme='dark']  [data-checked="true"] .fst-un__core-bg--blue   { background-color: var( --un-color-abbvie-medium-blue );}
  [data-colorscheme='dark']  [data-checked="true"] .fst-un__core-bg--purple { background-color: var( --un-color-purposeful-light-purple );}
  [data-colorscheme='dark']  [data-checked="true"] .fst-un__core-bg--cobalt { background-color: var( --un-color-curious-light-cobalt );}
  [data-colorscheme='dark']  [data-checked="true"] .fst-un__core-bg--red    { background-color: var( --un-color-remarkable-light-red );}
  [data-colorscheme='dark']  [data-checked="true"] .fst-un__core-bg--green  { background-color: var( --un-color-global-light-green );}

  [data-colorscheme='light'] .fst-un__core-color--text { color: var( --un-checkbox-label-color );}
  [data-colorscheme='dark']  .fst-un__core-color--text { color: var( --un-color-abbvie-white );}

</style>

<output class="l-unityCheckbox">

  <label class="UnityCheckbox" data-colorscheme='light'
  part="checkbox_toplevel">
    <span class="UnityCheckbox__cntr" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; white-space: nowrap; width: 1px;">
      <input type="checkbox" aria-checked="true"
      part="checkbox_input">
    </span>
    <span data-checked="true" class="UnityCheckboxCheck UnityCheckboxCheck_interactive" 
    part="checkbox_box">
      <span class="fst-un__core-bg" aria-hidden="true" style="display: block; width: 1em; height: 1em; pointer-events: none;">
        <svg xmlns="http://www.w3.org/2000/svg" 
        style="fill: #FFFFFF;" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
      </span>
    </span>
    <slot class="fst-un__core-color--text"
    part="checkbox_label"></slot>
  </label>

</output>
`

class UnityCheckbox extends HTMLElement {
    constructor(){
        super()
        this.myShadow = this.attachShadow({mode: "closed"})
        this.isInit = false
        this.elPartToplevel = null; this.elPartInput = null; this.elPartBox = null; this.elPartLabel = null;
        this.KEYCODE = { SPACE: 32 }

        let clone = elTmpl.content.cloneNode( true )
        this.myShadow.append( clone )
    }
    static get observedAttributes(){  //  Allowed Attribs
        return [ 'aria-checked', 'checked', 'disabled', 'errorState', 'required', 'scale', 'theme', 'colorscheme', "customcss" ]
    }
    get ariaChecked(){ return this.getAttribute( "errorState" ) }
    set ariaChecked( _errorState ){ this.setAttribute( "errorState", _errorState )}

    get ariaChecked(){ return this.getAttribute( "aria-checked" ) }
    set ariaChecked( _ariaChecked ){ this.setAttribute( "aria-checked", _ariaChecked )}

    get checked(){ return this.getAttribute( "checked" ) }
    set checked( _checked ){ this.setAttribute( "checked", _checked )}

    get disabled(){ return this.getAttribute( "disabled" ) }
    set disabled( _disabled ){ this.setAttribute( "disabled", _disabled )}

    get theme(){ return this.getAttribute( "theme" ) }
    set theme( _theme="brand" ){ this.setAttribute( "theme", _theme )}

    get customcss(){ return this.getAttribute( "customcss" ) }
    set customcss( _customcss="" ){ this.setAttribute( "customcss", _customcss )}

    get colorscheme(){ return this.getAttribute( "colorscheme" ) }
    set colorscheme( _colorscheme="light" ){ this.setAttribute( "colorscheme", _colorscheme )}

    attributeChangedCallback( _attrName, _orig, _new ){
      this.doInit()
      switch( _attrName.toLowerCase() ){
          case "checked":
            this._doCheckedState( ( this.getAttribute( "checked" ) === "true" ) )
          break;
          case "disabled":
            if( this.getAttribute( "disabled" ) === "true" ){
              this.elPartToplevel.classList.add("un-disabled")
            }else{
              this.elPartToplevel.classList.remove("un-disabled")
            }
          break;
          case "theme":
              const classNameBG = {
                  "abbvie_blue": "fst-un__core-bg--blue",  //  DataVis 👁️ UX 🍭 PWA 👁️ ThreeJS ✨ RUST WASM  🚀 SSE 🌶️ htmx
                  "abbvie_purposeful": "fst-un__core-bg--purple",  //  primary
                  "abbvie_curious": "fst-un__core-bg--cobalt",  //  secondary
                  "abbvie_remarkable": "fst-un__core-bg--red",  //  danger
                  "abbvie_global": "fst-un__core-bg--green"  //  success
              }[ _new.toLowerCase() ];
              [ ... this.elPartToplevel.querySelectorAll( "[class^='fst-un__core-bg']" )].forEach( ( el )=>{
                  el.classList.forEach( (cn)=>{
                      if( cn.indexOf("fst-un__core-bg") == -1) el.classList.remove( cn )
                  })
                  el.classList.add("fst-un__core-bg", classNameBG)
              })
          break;
          case "colorscheme":
              this.elPartToplevel.dataset.colorscheme = _new;
          break;
          case "customcss":
            const style = document.createElement('style');
                style.textContent = `
                  ${_new}
                `;
                this.myShadow.appendChild(style);
          break;
      }
    }
    connectedCallback(){
      this.doInit()

      this._doCheckedState( this.hasAttribute("checked") )

      if (!this.hasAttribute("role"))
        this.setAttribute("role", "checkbox");
      if (!this.hasAttribute("tabindex"))
        this.setAttribute("tabindex", 0);

        this.addEventListener("keyup", this._onKeyUp)
        this.elPartInput.addEventListener("change", this._onChange.bind( this ))
    }

    disconnectedCallback(){
      this.removeEventListener('keyup', this._onKeyUp);
      this.elPartInput.removeEventListener('change', this._onChange() );
    }

    doInit(){  //  run once HMR (Hot Module Replacement)
      if( !this.isInit ){
        this.isInit = true
        
        this.elPartToplevel = this.myShadow.querySelector( "[part='checkbox_toplevel']" )
        this.elPartInput = this.myShadow.querySelector( "[part='checkbox_input']" )
        this.elPartBox = this.myShadow.querySelector( "[part='checkbox_box']" )
        this.elPartLabel = this.myShadow.querySelector( "[part='checkbox_label']" )
      }
    }

    _onKeyUp( ev ){
        if (ev?.altKey) return;
        switch (ev?.keyCode) {
            case this.KEYCODE.SPACE:
                ev.preventDefault()
                this._doCheckedState( ( this.getAttribute( "checked" ) === "true" ) )
            break;
            default:
            return;
        }
    }

    _onChange( ev ){
      if( ev?.currentTarget ){
        this.setAttribute( "checked", ev.currentTarget.checked )
        this._doCheckedState( ev.currentTarget.checked )
      }
    }
/*
    _toggleChecked() {
        if (this.disabled) return;
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
            checked: this.checked,
            },
            bubbles: true,
        }));
    }
*/ 
    _doCheckedState( isChecked ){  //  Set attr and inner dataset boolean 
      this.elPartInput.checked = this.elPartBox.dataset.checked = this.ariaChecked = isChecked
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
        checked: this.checked,
        },
        bubbles: true,
    }));
    }
}

customElements.define( "ifts-un-checkbox", UnityCheckbox )
