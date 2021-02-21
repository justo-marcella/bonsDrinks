import React, { Component, Fragment } from 'react'

export default class FaleConosco extends Component {
    render() {
        return (

            <Fragment>
                <h1>Contato</h1>
                <form>
                    <div>
                        <label htmlFor='nome'>Nome:</label>
                        <input type='text' name='nome'/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                            <input type='text' name='email'/>
                    </div>
                    <div>
                        <label htmlFor='mensagem'>Mensagem:</label>
                        <textarea rows='10' cols='50' type='text'></textarea>
                    </div>
                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
            </Fragment>
        )
    }
}
