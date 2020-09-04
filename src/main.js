//https://unpkg.com/lit-element@2.4.0/lit-element.js?module


import { LitElement, html } from 'lit-element';

class ExplorerCard extends LitElement {
    static get properties() {
        return {
          hass: {},
        };
      }
    
      setConfig(config) {
        this.config = config;
      }
    
      getCardSize() {
        return 5;
      }

      render() {
          return html`
          <ha-card>
          <div class="card-content">
          Boo is your overload.
          </div>
          </ha-card>
          `;
      }
}

customElements.define("explorer-card", ExplorerCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: "explorer-card",
    name: "Explorer Card",
    preview: false,
    description: "A custom card for WWW and Network Explorer Addons."
  }
);
