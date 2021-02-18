import React, { Component } from 'react'

export default class FaleConosco extends Component {
    render() {
        return (
            <div>
                <h1>Contato</h1>
                <div>
                    <div>
                        <img src='https://bonsdrinks.netlify.app/static/media/contact-pic.689e126c.jpg'></img>
                    </div>
                    <div>
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
                    </div>
                </div>
                
            </div>
        )
    }
}
