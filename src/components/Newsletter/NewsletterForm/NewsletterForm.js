import React from 'react'
import { Formik } from "formik"
import * as Yup from "yup"
import './NewsletterForm.scss'
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';
import { postSusbscription } from '../../../services/apiServices'
import { finishLoadingNewsletter, startLoadingNewsletter } from '../../../actions/ui'
import Swal from 'sweetalert2'

const customSwal = Swal.mixin({
    customClass: {
        title: 'swal-title',
        confirmButton: 'swal-button-text'
    }
})

export const NewsletterForm = () => {

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.ui.newsletter)

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Nombre inválido, demasiado corto")
            .required("Este campo es obligatorio"),
        email: Yup.string()
            .email("Email inválido")
            .required("Este campo es requerido")
    })
    
    const initialValues = {
        name: "",
        email: ""
    }
    
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={async (values, formikBag) => {
                dispatch( startLoadingNewsletter() )
                try {
                    await postSusbscription(values)
                    customSwal.fire({
                        icon: 'success',
                        title: 'Suscripción realizada!',
                        confirmButtonText: 'Genial!'
                      })
                      
                    formikBag.resetForm()
                } catch (err) {
                    customSwal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err
                      })
                }
                dispatch( finishLoadingNewsletter() )
            }}
        >
            {(formik) => (
                <form className="newsletter-form" onSubmit={formik.handleSubmit}>
                    <div className="newsletter-input-group">
                        <input
                            placeholder="Ingresa tu nombre"
                            className="newsletter-input"
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.name && formik.errors.name ? <p className="input-error">{formik.errors.name}</p> : null}
                    </div>

                    <div className="newsletter-input-group">
                        <input
                            placeholder="Ingresa tu mail"
                            className="newsletter-input"
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? <p className="input-error">{formik.errors.email}</p> : null}
                    </div>

                    <button 
                        type="submit" 
                        className="newsletter-btn"
                    >
                        {loading 
                            ? <CircularProgress
                                size={24}
                                sx={{
                                    color: '#FFF',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }}
                            />
                            : 'Suscribirme'                    
                        }
                    </button>
                </form>
            )}
        </Formik>
    )
}
