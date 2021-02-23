import React, { Component, Fragment } from 'react'
import "./estiloContato.css"

export default class FaleConosco extends Component {
    render() {
        return (

            <Fragment>
                <h1>Contato</h1>
                <section className="contato">
                    <img className="imgContato" src="https://www.mhemann.com.br/wp-content/uploads/2020/02/home-blog-box-slide-1-background-1.jpg"/>
                <form className="formContato">
                    <div>
                        <label className="labelContato" htmlFor='nome'>Nome:</label>
                        <input className="inputForm" type='text' name='nome'/>
                    </div>
                    <div>
                        <label className="labelContato" htmlFor='email'>Email:</label>
                        <input className="inputForm" type='text' name='email'/>
                    </div>
                    <div>
                        <label className="labelContato" htmlFor='mensagem'>Mensagem:</label>
                        <textarea className="inputForm" rows='10' cols='50' type='text'></textarea>
                    </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
            
            </section>
            </Fragment>
        )
    }
}
