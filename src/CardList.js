import { LitElement, html, css } from 'lit';
import "business-card2/src/business-card2.js";
import "business-card-3/src/business-card.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class CardList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        /* flex-direction: column; */
        /* align-items: center; */
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--card-list-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <business-card>
      <p>
        A tree as beautiful as this one should be cut down
        Trees!
      </p>
     </business-card> 

     <business-card2 >
      <p> 
        Cut grass! Cut trees! Plant flowers! Make your lawn pretty
      </p>
      </business-card2>

      <business-card>
      <p>
        A tree as beautiful as this one should be cut down
        Trees!
      </p>
     </business-card> 

     <business-card2 >
      <p> 
        Cut grass! Cut trees! Plant flowers! Make your lawn pretty
      </p>
      </business-card2>
      <business-card>
      <p>
        A tree as beautiful as this one should be cut down
        Trees!
      </p>
     </business-card> 

     <business-card2 >
      <p> 
        Cut grass! Cut trees! Plant flowers! Make your lawn pretty
      </p>
      </business-card2>
      <business-card>
      <p>
        A tree as beautiful as this one should be cut down
        Trees!
      </p>
     </business-card> 

     <business-card2 >
      <p> 
        Cut grass! Cut trees! Plant flowers! Make your lawn pretty
      </p>
      </business-card2>
      <business-card>
      <p>
        A tree as beautiful as this one should be cut down
        Trees!
      </p>
     </business-card> 

     <business-card2 >
      <p> 
        Cut grass! Cut trees! Plant flowers! Make your lawn pretty
      </p>
      </business-card2>
       



    `;
  }
}
