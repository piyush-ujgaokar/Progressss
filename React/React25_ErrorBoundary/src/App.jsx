
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Statistics from "./components/Statistics";
import UserProfile from "./components/UserProfile";
import {ErrorBoundary} from "react-error-boundary"
// import ErrorBoundary  from "./ErrorBoundary";

//Error Boundary using Package:- 

const userfallbackComponent=({error,resetErrorBoundary})=>{
    return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error?.message}</p>

      <button onClick={resetErrorBoundary}>
        Try Again
      </button>
    </div>
  );
}

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-5xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* <ErrorBoundary>
            <UserProfile />
          </ErrorBoundary> */}
           <ErrorBoundary fallbackRender={userfallbackComponent}>
            <UserProfile />
           </ErrorBoundary>
          <Statistics />
          <ProductList />
        </div>
      </main>
    </div>
  );
};

export default App;
