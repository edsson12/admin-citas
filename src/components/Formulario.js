import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {



//crear state de citas

    const [cita,setCita]= useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

const [error, setError]= useState(false)

// funcion que se ejecuta cuando el user escribe en el input

    const actualizarState = e => {
        
        setCita({
            ...cita,
            [e.target.name]:e.target.value

        })
        
    }


// extraer los valores

const {mascota, propietario,fecha,hora,sintomas}= cita;

//cuando se envia el form

const submitCita = e =>{
    e.preventDefault();
    
    //validar
    if(mascota.trim() === '' || propietario.trim() === ''|| fecha.trim() === ''
     || hora.trim() === '' || sintomas.trim() === '' ){
        setError(true);
        return;
    }
    setError(false);


    //asignar un ID
    cita.id=uuid();

    //crear cita
    crearCita(cita);
    //reiniciar el form
    setCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''        
    })

}


    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            

            <form
                onSubmit={submitCita}
            
            >
                <label>Nombre de mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value={mascota}
                
                />

                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                    
                
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                
                />

                <label>Sintomas</label>
                <textarea
                    className=" u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState}

                >Agregar cita</button>

            </form>
        </Fragment>
     );
}

Formulario.propTypes= {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;