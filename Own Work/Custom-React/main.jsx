
const reactElement = React.createElement(
    'a',
    { href: 'https://google.com',target:'_blank'},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
