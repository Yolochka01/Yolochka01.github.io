import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId="process.env.REACT_APP_GOOGLE_API_TOKEN">
      <main.js />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
)