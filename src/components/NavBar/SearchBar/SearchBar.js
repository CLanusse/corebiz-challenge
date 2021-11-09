import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import './SearchBar.scss'
import { useDispatch } from 'react-redux';
import { getAllProducts, getFilteredProducts } from '../../../actions/productsActions';

export const SearchBar = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleSearch = () => {
        value.length > 0 && dispatch( getFilteredProducts(value) )
    }

    useEffect(()=>{
        value.length === 0 && dispatch( getAllProducts() )
    }, [value, dispatch])

    return (
        <TextField 
            className="search-bar"
            label="¿Qué estás buscando?"
            type="search"
            variant="standard"
            value={value}
            onChange={handleInputChange}
            onKeyDown={({key}) => key === "Enter" && handleSearch()}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <SearchIcon 
                        style={{fontSize: '2.4rem', color: "#000"}}
                        className="search-icon"
                        onClick={handleSearch}
                    />
                    </InputAdornment>
                ),
                }}
        />
    )
}
