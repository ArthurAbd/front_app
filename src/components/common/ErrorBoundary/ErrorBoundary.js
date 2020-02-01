import React from 'react'

class ErrorBoundary extends React.Component {

    state = { hasError: false }
    

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }
  
    render() {
        if (this.state.hasError) {
            return <div style={{display: 'flex', justifyContent: 'center', margin: '20px'}}>
                <h2>Что-то пошло не так, обновите страницу.</h2>
            </div>
        }
  
        return this.props.children;
    }
}

export default ErrorBoundary