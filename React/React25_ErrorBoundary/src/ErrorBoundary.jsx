import { Component } from "react"

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={hasError:false,error:null}
    }

static getDerivedStateFromError(error){
    return {hasError:true,error}
}

componentDidCatch(error,errorInfo){
    console.log(error);
    console.log(errorInfo);
    
}

    render(){
        if(this.state.hasError){
          return ( 
          <div className="min-h-[250px] flex items-center justify-center bg-red-50 border border-red-200 rounded-xl p-8">
      <div className="text-center">
        <div className="text-5xl mb-4">⚠️</div>

        <h2 className="text-2xl font-bold text-red-600">
          Something went wrong!
        </h2>

        <p className="text-gray-600 mt-2">
          This component crashed unexpectedly.
        </p>

        <p className="text-sm text-red-500 mt-3">
          {this.state.error?.message}
        </p>

        <button
          className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
        >
          Try Again
        </button>
      </div>
    </div>
          )
        }

        return this.props.children
    }


}


export default ErrorBoundary