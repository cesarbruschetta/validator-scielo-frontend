import React, { Component } from 'react';
import axios, { put } from 'axios';

class SubmitXML extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            errors: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        file:e.target.files[0],
        submitted: false
      })
    }
    
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        this.fileUpload(this.state.file).then((response) => {
          
          const data = response.data;
          if (!data.valid){
            this.setState({
              errors: data.errors,
              submitted: false
            })
          }
        })
    }
    
    fileUpload(file){
      
      const urlApi = 'https://validator-scielo.herokuapp.com/api/validators';
      // const urlApi ="http://ec2-3-80-164-237.compute-1.amazonaws.com:8000/api/validators";
      const formData = new FormData();
      formData.append('file',file)
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }      
      return put(urlApi, formData,config)
        .catch(this.handleResponse)
    }
    
    handleResponse(request) {
      const response = request.response;
      if (!response){
        return Promise.reject(request);
      }
      if (response.status != '200') {
          const error = response.data['detail'] || response.statusText;
          alert(error)

          return Promise.reject(error);
      }
      
      return request;
    }
  
    render() {
        const { submitted, errors } = this.state;
        
        return (
          <div className="jumbotron">
            <div className="container">
              <h1>Envie seu arquivo XML para validar </h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              
              <form onSubmit={this.handleSubmit} className="mb-2">
                <div className="form-group">
                  <label htmlFor="xmlfile">Arquivo XML</label>
                  <input type="file" className="form-control" id="xmlfile" name="xmlfile" onChange={this.handleChange}
                          aria-describedby="emailHelp" placeholder="seu_arquivo.xml" />
                  <small id="emailHelp" className="form-text text-muted">Envie seu arquivo xml para ser validado.</small>
                </div>
                <button type="submit" className="btn btn-primary" disabled={(submitted ? 'disabled' : '')} >Enviar</button>
              </form>
              
              <div className="mt-2">
               <ul className="list-group">
                {errors.map((error, i) => {
                  return (
                    <li className="list-group-item disabled" key={i}>{error}</li>
                  )
                })}
               </ul>
              
              </div>

            </div>
          </div>
        )
    }
};

export default SubmitXML;