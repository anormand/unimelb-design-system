function IconSet() {
  this.props = {
    'svg': '<svg xmlns="http://www.w3.org/2000/svg">'
  };
  this.addSymbols();
  this.props.svg += '</svg>';
}

IconSet.prototype.render = function() {
  return this.props.svg;
};

IconSet.prototype.addSymbols = function() {
  this.props.svg += `
<symbol id="icon-add" viewBox="0 0 48 48"><path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z"/></symbol>
<symbol id="icon-bar" viewBox="0 0 48 48"><path d="M22 26v12H12v4h24v-4H26V26l16-16V6H6v4l16 16zm-7-12l-4-4h26l-4 4H15z"/></symbol>
<symbol id="icon-bike" viewBox="0 0 48 48"><path d="M31 11c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zM10 24C4.5 24 0 28.5 0 34s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm11.6-19.9l4.7-4.8 1.5 1.5c2.5 2.6 6 4.1 10.1 4.1v-4c-3 0-5.5-1.1-7.3-2.9l-3.9-3.8c-.6-.7-1.6-1.2-2.7-1.2s-2.1.4-2.8 1.2l-5.5 5.5c-.7.7-1.2 1.7-1.2 2.8 0 1.1.5 2.1 1.2 2.9L22 28v10h4V25.5l-4.4-4.4zM38 24c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/></symbol>
<symbol id="icon-bus" viewBox="0 0 48 48"><path d="M8 32c0 1.77.78 3.34 2 4.44V40c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h16v2c0 1.1.89 2 2 2h2c1.1 0 2-.9 2-2v-3.56c1.22-1.1 2-2.67 2-4.44V12c0-7-7.16-8-16-8S8 5 8 12v20zm7 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm18 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-12H12V12h24v10z"/></symbol>
<symbol id="icon-cafe" viewBox="0 0 48 48"><path d="M40 6H8v20c0 4.42 3.58 8 8 8h12c4.42 0 8-3.58 8-8v-6h4c2.21 0 4-1.79 4-4v-6c0-2.21-1.79-4-4-4zm0 10h-4v-6h4v6zM4 42h36v-4H4v4z"/></symbol>
<symbol id="icon-campaign" viewBox="0 0 48 48"><path d="M8 20v14h6V20H8zm12 0v14h6V20h-6zM4 44h38v-6H4v6zm28-24v14h6V20h-6zM23 2L4 12v4h38v-4L23 2z"/></symbol>
<symbol id="icon-car" viewBox="0 0 48 48"><path d="M37.84 12.02C37.43 10.84 36.31 10 35 10H13c-1.31 0-2.43.84-2.84 2.02L6 24v16c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h24v2c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2V24l-4.16-11.98zM13 32c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM10 22l3-9h22l3 9H10z"/></symbol>
<symbol id="icon-cart" viewBox="0 0 48 48"><path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z"/></symbol>
<symbol id="icon-chat" viewBox="0 0 48 48"><path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 18h24v4H12v-4zm16 10H12v-4h16v4zm8-12H12v-4h24v4z"/></symbol>
<symbol id="icon-check-circle" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></symbol>
<symbol id="icon-city" viewBox="0 0 48 48"><path d="M30 22V10l-6-6-6 6v4H6v28h36V22H30zM14 38h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm12 16h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm12 24h-4v-4h4v4zm0-8h-4v-4h4v4z"/></symbol>
<symbol id="icon-clock" viewBox="0 0 48 48"><path fill-opacity=".9" d="M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zM25 14h-3v12l10.49 6.3L34 29.84l-9-5.34z"/></symbol>
<symbol id="icon-close" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/></symbol>
<symbol id="icon-cutlery" viewBox="0 0 48 48"><path d="M16.2 26.69l5.66-5.66L7.83 7c-3.12 3.12-3.12 8.19 0 11.31l8.37 8.38zm13.57-3.63c3.05 1.43 7.36.42 10.54-2.76 3.83-3.83 4.56-9.3 1.63-12.23C39 5.14 33.52 5.87 29.7 9.7c-3.18 3.18-4.18 7.49-2.76 10.54-4.45 4.44-19.53 19.52-19.53 19.52l2.83 2.83L24 28.83l13.76 13.76 2.83-2.83L26.83 26l2.94-2.94z"/></symbol>
<symbol id="icon-delete" viewBox="0 0 48 48"><path d="M38 26H10v-4h28v4z"/></symbol>
<symbol id="icon-devices" viewBox="0 0 48 48"><path d="M8,12 L44,12 L44,8 L8,8 C5.79,8 4,9.79 4,12 L4,34 L0,34 L0,40 L28,40 L28,34 L8,34 L8,12 L8,12 Z M46,16 L34,16 C32.9,16 32,16.9 32,18 L32,38 C32,39.1 32.9,40 34,40 L46,40 C47.1,40 48,39.1 48,38 L48,18 C48,16.9 47.1,16 46,16 L46,16 Z M44,34 L36,34 L36,20 L44,20 L44,34 L44,34 Z"></path></symbol>
<symbol id="icon-download" viewBox="0 0 48 48"><path d="M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z"/></symbol>
<symbol id="icon-edit" viewBox="0 0 48 48"><path d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"/></symbol>
<symbol id="icon-ellipsis" viewBox="0 0 48 48"><path d="M12 20c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm24 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-12 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/></symbol>
<symbol id="icon-face" viewBox="0 0 48 48"><path d="M18,23.5 C16.62,23.5 15.5,24.62 15.5,26 C15.5,27.38 16.62,28.5 18,28.5 C19.38,28.5 20.5,27.38 20.5,26 C20.5,24.62 19.38,23.5 18,23.5 L18,23.5 Z M30,23.5 C28.62,23.5 27.5,24.62 27.5,26 C27.5,27.38 28.62,28.5 30,28.5 C31.38,28.5 32.5,27.38 32.5,26 C32.5,24.62 31.38,23.5 30,23.5 L30,23.5 Z M24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,12.95 35.05,4 24,4 L24,4 Z M24,40 C15.18,40 8,32.82 8,24 C8,23.42 8.04,22.85 8.1,22.29 C12.81,20.2 16.57,16.34 18.52,11.55 C22.14,16.65 28.09,20 34.83,20 C36.38,20 37.89,19.81 39.33,19.47 C39.76,20.91 40,22.43 40,24 C40,32.82 32.82,40 24,40 L24,40 Z"></path></symbol>
<symbol id="icon-facebook" viewBox="0 0 48 48"><path d="M41.792382,4 L6.20761801,4 C4.98810764,4 4,4.98810764 4,6.20761801 L4,41.792382 C4,43.0115926 4.98810764,44 6.20761801,44 L25.3651862,44 L25.3651862,28.5099553 L20.15248,28.5099553 L20.15248,22.4731017 L25.3651862,22.4731017 L25.3651862,18.021147 C25.3651862,12.8546015 28.5207461,10.0413497 33.129617,10.0413497 C35.337235,10.0413497 37.2347674,10.2057596 37.787646,10.279197 L37.787646,15.6784941 L34.591171,15.6799928 C32.0845579,15.6799928 31.5992716,16.8710274 31.5992716,18.6188374 L31.5992716,22.4731017 L37.5772254,22.4731017 L36.798789,28.5099553 L31.5992716,28.5099553 L31.5992716,44 L41.792382,44 C43.0115926,44 44,43.0115926 44,41.792382 L44,6.20761801 C44,4.98810764 43.0115926,4 41.792382,4"></path></symbol>
<symbol id="icon-faculty" viewBox="0 0 48 48"><path d="M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"/></symbol>
<symbol id="icon-flight" viewBox="0 0 48 48"><path d="M20.36 18"/><path d="M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z"/></symbol>
<symbol id="icon-home" viewBox="0 0 48 48"><path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z"/></symbol>
<symbol id="icon-hr" viewBox="0 0 48 48"><path d="M24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,12.95 35.05,4 24,4 L24,4 Z M24,10 C27.31,10 30,12.69 30,16 C30,19.32 27.31,22 24,22 C20.69,22 18,19.32 18,16 C18,12.69 20.69,10 24,10 L24,10 Z M24,38.4 C18.99,38.4 14.59,35.84 12,31.96 C12.05,27.99 20.01,25.8 24,25.8 C27.99,25.8 35.94,27.99 36,31.96 C33.41,35.84 29.01,38.4 24,38.4 L24,38.4 Z"></path></symbol>
<symbol id="icon-instagram" viewBox="0 0 48 48"><path d="M44,38.9 C44,41.7 41.7,44 38.9,44 L9.2,44 C6.4,44 4.1,41.7 4.1,38.9 L4.1,9.2 C4.1,6.4 6.4,4.1 9.2,4.1 L38.9,4.1 C41.7,4.1 44,6.4 44,9.2 L44,38.9 L44,38.9 Z M39.5,20.8 L36,20.8 C36.3,21.9 36.5,23 36.5,24.2 C36.5,30.9 30.9,36.3 24.1,36.3 C17.3,36.3 11.7,30.9 11.7,24.2 C11.7,23 11.9,21.9 12.2,20.8 L8.5,20.8 L8.5,37.7 C8.5,38.6 9.2,39.3 10.1,39.3 L37.9,39.3 C38.8,39.3 39.5,38.6 39.5,37.7 L39.5,20.8 L39.5,20.8 Z M24,16 C19.6,16 16,19.5 16,23.8 C16,28.1 19.6,31.6 24,31.6 C28.5,31.6 32,28.1 32,23.8 C32.1,19.5 28.5,16 24,16 L24,16 L24,16 Z M39.5,10.2 C39.5,9.2 38.7,8.4 37.7,8.4 L33.2,8.4 C32.2,8.4 31.4,9.2 31.4,10.2 L31.4,14.5 C31.4,15.5 32.2,16.3 33.2,16.3 L37.7,16.3 C38.7,16.3 39.5,15.5 39.5,14.5 L39.5,10.2 L39.5,10.2 Z"/></symbol>
<symbol id="icon-library" viewBox="0 0 48 48"><path d="M36 4H12C9.79 4 8 5.79 8 8v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zM12 8h10v16l-5-3-5 3V8z"/></symbol>
<symbol id="icon-linkedin" viewBox="0 0 48 48"><path d="M44,36.5 C44,40.6 40.6,44 36.5,44 L11.5,44 C7.4,44 4,40.6 4,36.5 L4,11.5 C4,7.4 7.4,4 11.5,4 L36.5,4 C40.6,4 44,7.4 44,11.5 L44,36.5 L44,36.5 Z M13.2,10.7 C11.1,10.7 9.8,12.1 9.8,13.8 C9.8,15.5 11.1,16.9 13.1,16.9 L13.1,16.9 C15.2,16.9 16.5,15.5 16.5,13.8 C16.6,12.1 15.3,10.7 13.2,10.7 L13.2,10.7 L13.2,10.7 Z M16.2,37.5 L16.2,19.4 L10.2,19.4 L10.2,37.5 L16.2,37.5 L16.2,37.5 Z M37.8,37.5 L37.8,27.1 C37.8,21.6 34.8,19 30.9,19 C27.7,19 26.2,20.8 25.5,22 L25.6,22 L25.6,19.4 L19.6,19.4 C19.6,19.4 19.7,21.1 19.6,37.5 L25.6,37.5 L25.6,27.4 C25.6,26.9 25.6,26.3 25.8,25.9 C26.2,24.8 27.2,23.7 28.9,23.7 C31.1,23.7 31.9,25.3 31.9,27.8 L31.9,37.5 L37.8,37.5 L37.8,37.5 Z"/></symbol>
<symbol id="icon-location" viewBox="0 0 48 48"><path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></symbol>
<symbol id="icon-lock" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></symbol>
<symbol id="icon-mail" viewBox="0 0 48 48"><path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z"/></symbol>
<symbol id="icon-map" viewBox="0 0 48 48"><path d="M41 6c-.11 0-.21.01-.31.05L30 10.2 18 6 6.73 9.8c-.42.14-.73.5-.73.96V41c0 .55.45 1 1 1 .11 0 .21-.01.31-.05L18 37.8 30 42l11.28-3.79c.42-.15.72-.51.72-.97V7c0-.55-.45-1-1-1zM30 38l-12-4.21V10l12 4.21V38z"/></symbol>
<symbol id="icon-menu" viewBox="0 0 48 48"><path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"/></symbol>
<symbol id="icon-money" viewBox="0 0 48 48"><path d="M24.97,21.8 C20.43,20.62 18.97,19.41 18.97,17.51 C18.97,15.33 20.98,13.8 24.37,13.8 C27.93,13.8 29.25,15.5 29.37,18 L33.79,18 C33.66,14.55 31.55,11.41 27.37,10.38 L27.37,6 L21.37,6 L21.37,10.32 C17.49,11.17 14.37,13.67 14.37,17.54 C14.37,22.16 18.2,24.46 23.77,25.8 C28.78,27 29.77,28.75 29.77,30.63 C29.77,32 28.8,34.2 24.37,34.2 C20.25,34.2 18.62,32.35 18.41,30 L14,30 C14.25,34.38 17.52,36.83 21.37,37.66 L21.37,42 L27.37,42 L27.37,37.7 C31.26,36.95 34.37,34.7 34.37,30.59 C34.37,24.93 29.51,22.99 24.97,21.8 L24.97,21.8 Z"></path></symbol>
<symbol id="icon-pharmacy" viewBox="0 0 48 48"><path d="M38 6H10c-2.21 0-3.98 1.79-3.98 4L6 38c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-2 22h-8v8h-8v-8h-8v-8h8v-8h8v8h8v8z"/></symbol>
<symbol id="icon-phone" viewBox="0 0 48 48"><path d="M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49C35.1 30.6 37.51 31 40 31c1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2C21.22 42 6 26.78 6 8c0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z"/></symbol>
<symbol id="icon-print" viewBox="0 0 48 48"><path d="M38 16H10c-3.31 0-6 2.69-6 6v12h8v8h24v-8h8V22c0-3.31-2.69-6-6-6zm-6 22H16V28h16v10zm6-14c-1.11 0-2-.89-2-2s.89-2 2-2c1.11 0 2 .89 2 2s-.89 2-2 2zM36 6H12v8h24V6z"/></symbol>
<symbol id="icon-profile" viewBox="0 0 48 48"><path d="M24 24c4.42 0 8-3.59 8-8 0-4.42-3.58-8-8-8s-8 3.58-8 8c0 4.41 3.58 8 8 8zm0 4c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"/></symbol>
<symbol id="icon-rss" viewBox="0 0 48 48"><path d="M9.6,44 L9.6,44 C6.6,44 4,41.4 4,38.4 L4,38.4 C4,35.4 6.6,32.8 9.6,32.8 L9.6,32.8 C12.6,32.8 15.2,35.4 15.2,38.4 L15.2,38.4 C15.2,41.4 12.8,44 9.6,44 L9.6,44 Z M4,4 L4,10 C22.8,10 38,25.2 38,44 L44,44 C44,21.9 26.1,4 4,4 L4,4 Z M4,16.2 L4,22.2 C16,22.2 25.8,32 25.8,44 L31.8,44 C31.8,28.6 19.4,16.2 4,16.2 L4,16.2 Z"/></symbol>
<symbol id="icon-search" viewBox="0 0 48 48"><path d="M32.6,29.2 L30.8,29.2 L30.2,28.6 C32.4,26 33.8,22.6 33.8,18.9 C33.8,10.7 27.1,4 18.9,4 C10.7,4 4,10.7 4,18.9 C4,27.1 10.7,33.8 18.9,33.8 C22.6,33.8 26,32.5 28.6,30.2 L29.2,30.8 L29.2,32.6 L40.6,44 L44,40.6 L32.6,29.2 L32.6,29.2 Z M18.9,29.2 C13.2,29.2 8.6,24.6 8.6,18.9 C8.6,13.2 13.2,8.6 18.9,8.6 C24.6,8.6 29.2,13.2 29.2,18.9 C29.2,24.6 24.6,29.2 18.9,29.2 L18.9,29.2 L18.9,29.2 Z"/></symbol>
<symbol id="icon-select" viewBox="0 0 48 48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 24l-8-8h16l-8 8z"/></symbol>
<symbol id="icon-send" viewBox="0 0 48 48"><path d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z"/></symbol>
<symbol id="icon-share" viewBox="0 0 48 48"><path d="M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31 0 3.22 2.61 5.83 5.83 5.83s5.83-2.61 5.83-5.83-2.61-5.83-5.83-5.83z"/></symbol>
<symbol id="icon-smartphone" viewBox="0 0 24 24"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/><path d="M0 0h24v24H0z" fill="none"/></symbol>
<symbol id="icon-student" viewBox="0 0 48 48"><path d="M10 26.36v8L24 42l14-7.64v-8L24 34l-14-7.64zM24 6L2 18l22 12 18-9.82V34h4V18L24 6z"/></symbol>
<symbol id="icon-tag" viewBox="0 0 48 48"><path d="M42.82 23.16L24.83 5.17C24.1 4.45 23.1 4 22 4H8C5.79 4 4 5.79 4 8v14c0 1.11.45 2.11 1.18 2.83l18 18C23.9 43.55 24.9 44 26 44c1.1 0 2.11-.45 2.83-1.17l14-14C43.55 28.1 44 27.1 44 26c0-1.11-.45-2.11-1.18-2.84zM11 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></symbol>
<symbol id="icon-train" viewBox="0 0 48 48"><path d="M8 31c0 3.87 3.14 7 7 7l-3 3v1h24v-1l-3-3c3.87 0 7-3.13 7-7V10c0-7-7.16-8-16-8S8 3 8 10v21zm16 3c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm12-14H12V10h24v10z"/></symbol>
<symbol id="icon-twitter" viewBox="0 0 48 48"><path d="M39.9,15.9 L39.9,17 C39.9,27.8 31.6,40.3 16.6,40.3 C12,40.3 7.6,39 4,36.6 C4.7,36.7 5.3,36.7 6,36.7 C9.8,36.7 13.4,35.4 16.2,33.2 C12.6,33.1 9.6,30.8 8.5,27.5 C9,27.6 9.5,27.6 10,27.6 C10.7,27.6 11.5,27.5 12.2,27.3 C8.4,26.5 5.6,23.2 5.6,19.3 L5.6,19.2 C6.7,19.8 8,20.2 9.3,20.2 C7.1,18.7 5.6,16.2 5.6,13.4 C5.6,11.9 6,10.5 6.7,9.3 C10.7,14.3 16.8,17.5 23.6,17.9 C23.5,17.3 23.4,16.7 23.4,16 C23.4,11.5 27.1,7.8 31.6,7.8 C34,7.8 36.1,8.8 37.6,10.4 C39.5,10 41.2,9.4 42.8,8.4 C42.2,10.3 40.9,11.9 39.2,12.9 C40.9,12.7 42.4,12.3 43.9,11.6 C42.9,13.2 41.5,14.7 39.9,15.9 L39.9,15.9 L39.9,15.9 Z"/></symbol>
<symbol id="icon-walk" viewBox="0 0 48 48"><path d="M27 9c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-7.5 6.8L14 44h4.2l3.5-16 4.3 4v12h4V28.9l-4.1-4.1 1.2-6C29.7 22 33.6 24 38 24v-4c-3.7 0-6.9-2-8.7-4.9l-1.9-3.2c-.7-1.2-2-1.9-3.4-1.9-.5 0-1 .1-1.5.3L12 14.6V24h4v-6.7l3.5-1.5"/></symbol>
<symbol id="icon-world" viewBox="0 0 48 48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 35.86C14.11 38.88 8 32.16 8 24c0-1.23.15-2.43.42-3.58L18 30v2c0 2.21 1.79 4 4 4v3.86zm13.79-5.07C35.28 33.17 33.78 32 32 32h-2v-6c0-1.1-.9-2-2-2H16v-4h4c1.1 0 2-.9 2-2v-4h4c2.21 0 4-1.79 4-4v-.83c5.86 2.37 10 8.11 10 14.83 0 4.16-1.6 7.94-4.21 10.79z"/></symbol>
<symbol id="icon-youtube" viewBox="0 0 48 48"><path d="M40,40.3 C39.6,42.1 38.1,43.4 36.4,43.5 C32.3,44 28.1,44 24,44 C19.9,44 15.7,44 11.6,43.5 C9.9,43.3 8.4,42 8,40.3 C7.4,37.8 7.4,35.1 7.4,32.5 C7.4,29.9 7.4,27.2 8,24.7 C8.4,22.9 9.9,21.6 11.6,21.4 C15.7,21 19.8,21 24,21 C28.2,21 32.3,21 36.4,21.4 C38.1,21.6 39.6,22.9 40,24.7 C40.6,27.2 40.6,29.9 40.6,32.5 C40.5,35 40.5,37.8 40,40.3 L40,40.3 L40,40.3 Z M16.9,26.9 L16.9,24.8 L9.9,24.8 L9.9,26.9 L12.2,26.9 L12.2,39.6 L14.4,39.6 L14.4,26.9 L16.9,26.9 L16.9,26.9 Z M20.5,4 L17.8,12.9 L17.8,18.9 L15.6,18.9 L15.6,12.9 C15.4,11.8 15,10.2 14.2,8.2 L12.7,4 L15.1,4 L16.7,9.9 L18.2,4 L20.5,4 L20.5,4 Z M22.9,39.6 L22.9,28.6 L20.9,28.6 L20.9,37 C20.5,37.6 20,37.9 19.6,37.9 C19.3,37.9 19.2,37.7 19.1,37.4 L19.1,36.6 L19.1,28.5 L17.1,28.5 L17.1,37.2 C17.1,38 17.2,38.5 17.3,38.8 C17.5,39.4 17.9,39.6 18.6,39.6 C19.3,39.6 20.1,39.2 20.9,38.2 L20.9,39.4 L22.9,39.4 L22.9,39.6 L22.9,39.6 Z M26.5,15.3 C26.5,16.5 26.3,17.4 25.9,17.9 C25.3,18.7 24.6,19 23.5,19 C22.5,19 21.7,18.6 21.2,17.9 C20.8,17.3 20.6,16.4 20.6,15.3 L20.6,11.4 C20.6,10.2 20.8,9.3 21.2,8.8 C21.8,8 22.5,7.7 23.5,7.7 C24.5,7.7 25.3,8.1 25.9,8.8 C26.3,9.4 26.5,10.2 26.5,11.4 L26.5,15.3 L26.5,15.3 Z M24.5,11 C24.5,10 24.2,9.5 23.5,9.5 C22.9,9.5 22.5,10 22.5,11 L22.5,15.7 C22.5,16.7 22.8,17.3 23.5,17.3 C24.2,17.3 24.5,16.8 24.5,15.7 L24.5,11 L24.5,11 Z M30.5,31.9 C30.5,30.9 30.5,30.1 30.3,29.7 C30.1,28.9 29.5,28.5 28.7,28.5 C28,28.5 27.3,28.9 26.6,29.7 L26.6,24.9 L24.6,24.9 L24.6,39.7 L26.6,39.7 L26.6,38.6 C27.3,39.4 28,39.8 28.7,39.8 C29.5,39.8 30,39.4 30.3,38.6 C30.5,38.1 30.5,37.4 30.5,36.4 L30.5,31.9 L30.5,31.9 Z M28.5,36.5 C28.5,37.5 28.2,38 27.6,38 C27.3,38 26.9,37.8 26.6,37.5 L26.6,30.8 C26.9,30.5 27.3,30.3 27.6,30.3 C28.2,30.3 28.5,30.8 28.5,31.8 L28.5,36.5 L28.5,36.5 Z M34,19 L32,19 L32,17.8 C31.2,18.7 30.4,19.2 29.7,19.2 C29.1,19.2 28.6,18.9 28.4,18.4 C28.3,18.1 28.2,17.5 28.2,16.7 L28.2,7.9 L30.2,7.9 L30.2,16.1 L30.2,16.9 C30.2,17.2 30.4,17.4 30.7,17.4 C31.1,17.4 31.5,17.1 32,16.4 L32,7.9 L34,7.9 L34,19 L34,19 Z M38.1,35.8 L36.1,35.8 L36.1,37.2 C36,37.7 35.7,38 35.2,38 C34.5,38 34.2,37.5 34.2,36.5 L34.2,34.6 L38.2,34.6 L38.2,32.3 C38.2,31.1 38,30.3 37.6,29.7 C37,28.9 36.2,28.6 35.2,28.6 C34.2,28.6 33.4,29 32.8,29.7 C32.4,30.3 32.2,31.1 32.2,32.3 L32.2,36.2 C32.2,37.4 32.4,38.3 32.8,38.8 C33.4,39.6 34.2,39.9 35.2,39.9 C36.2,39.9 37.1,39.5 37.6,38.7 C37.8,38.3 38,37.9 38.1,37.5 L38.1,36.2 L38.1,35.8 L38.1,35.8 Z M36.1,32.8 L34.1,32.8 L34.1,31.8 C34.1,30.8 34.4,30.3 35.1,30.3 C35.8,30.3 36.1,30.8 36.1,31.8 L36.1,32.8 L36.1,32.8 Z"/></symbol>
<symbol id="icon-zoom-in" viewBox="0 0 48 48"><path d="M32.6,29.2 L30.8,29.2 L30.2,28.6 C32.4,26 33.8,22.6 33.8,18.9 C33.8,10.7 27.1,4 18.9,4 C10.7,4 4,10.7 4,18.9 C4,27.1 10.7,33.8 18.9,33.8 C22.6,33.8 26,32.5 28.6,30.2 L29.2,30.8 L29.2,32.6 L40.6,44 L44,40.6 L32.6,29.2 L32.6,29.2 Z M18.9,29.2 C13.2,29.2 8.6,24.6 8.6,18.9 C8.6,13.2 13.2,8.6 18.9,8.6 C24.6,8.6 29.2,13.2 29.2,18.9 C29.2,24.6 24.6,29.2 18.9,29.2 L18.9,29.2 L18.9,29.2 Z M24.6,20.1 L20,20.1 L20,24.7 L17.7,24.7 L17.7,20.1 L13.1,20.1 L13.1,17.8 L17.7,17.8 L17.7,13.2 L20,13.2 L20,17.8 L24.6,17.8 L24.6,20.1 L24.6,20.1 Z"/></symbol>
<symbol id="icon-zoom-out" viewBox="0 0 48 48"><path d="M32.6,29.2 L30.8,29.2 L30.2,28.6 C32.4,26 33.8,22.6 33.8,18.9 C33.8,10.7 27.1,4 18.9,4 C10.7,4 4,10.7 4,18.9 C4,27.1 10.7,33.8 18.9,33.8 C22.6,33.8 26,32.5 28.6,30.2 L29.2,30.8 L29.2,32.6 L40.6,44 L44,40.6 L32.6,29.2 L32.6,29.2 Z M18.9,29.2 C13.2,29.2 8.6,24.6 8.6,18.9 C8.6,13.2 13.2,8.6 18.9,8.6 C24.6,8.6 29.2,13.2 29.2,18.9 C29.2,24.6 24.6,29.2 18.9,29.2 L18.9,29.2 Z M13.2,17.8 L24.6,17.8 L24.6,20.1 L13.2,20.1 L13.2,17.8 L13.2,17.8 Z"/></symbol>
<symbol id="icon-north-south" viewBox="0 0 48 48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 24l-8-8h16l-8 8z"/></symbol>
<symbol id="icon-jobs" viewBox="0 0 48 48"><path d="M40,13 L32,13 L32,9 C32,6.78 30.22,5 28,5 L20,5 C17.78,5 16,6.78 16,9 L16,13 L8,13 C5.78,13 4.02,14.78 4.02,17 L4,39 C4,41.22 5.78,43 8,43 L40,43 C42.22,43 44,41.22 44,39 L44,17 C44,14.78 42.22,13 40,13 L40,13 Z M28,13 L20,13 L20,9 L28,9 L28,13 L28,13 Z"/></symbol>
<symbol id="icon-videofile" viewBox="0 0 48 48"><path d="M40.3636364,8 L7.63636364,8 C5.61818182,8 4,9.61818182 4,11.6363636 L4,33.4545455 C4,35.4545455 5.61818182,37.0909091 7.63636364,37.0909091 L16.7272727,37.0909091 L16.7272727,40.7272727 L31.2727273,40.7272727 L31.2727273,37.0909091 L40.3636364,37.0909091 C42.3636364,37.0909091 43.9818182,35.4545455 43.9818182,33.4545455 L44,11.6363636 C44,9.61818182 42.3636364,8 40.3636364,8 L40.3636364,8 Z M40.3636364,33.4545455 L7.63636364,33.4545455 L7.63636364,11.6363636 L40.3636364,11.6363636 L40.3636364,33.4545455 L40.3636364,33.4545455 Z M31.2727273,22.5454545 L18.5454545,29.8181818 L18.5454545,15.2727273 L31.2727273,22.5454545 Z"></path></symbol>
<symbol id="icon-group" viewBox="0 0 48 48"><path d="M32,22 C35.31,22 37.98,19.31 37.98,16 C37.98,12.69 35.31,10 32,10 C28.69,10 26,12.69 26,16 C26,19.31 28.69,22 32,22 L32,22 Z M16,22 C19.31,22 21.98,19.31 21.98,16 C21.98,12.69 19.31,10 16,10 C12.69,10 10,12.69 10,16 C10,19.31 12.69,22 16,22 L16,22 Z M16,26 C11.33,26 2,28.34 2,33 L2,38 L30,38 L30,33 C30,28.34 20.67,26 16,26 L16,26 Z M32,26 C31.42,26 30.77,26.04 30.07,26.11 C32.39,27.78 34,30.03 34,33 L34,38 L46,38 L46,33 C46,28.34 36.67,26 32,26 L32,26 Z"></path></symbol>
<symbol id="icon-computer" viewBox="0 0 48 48"><path d="M40,36 C42.21,36 43.98,34.21 43.98,32 L44,12 C44,9.79 42.21,8 40,8 L8,8 C5.79,8 4,9.79 4,12 L4,32 C4,34.21 5.79,36 8,36 L0,36 L0,40 L48,40 L48,36 L40,36 L40,36 Z M8,12 L40,12 L40,32 L8,32 L8,12 L8,12 Z"></path></symbol>
`;
};

module.exports = IconSet;
