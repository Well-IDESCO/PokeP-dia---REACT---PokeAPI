import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import { Box, Container, Grid, Link } from '@mui/material';
import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { Skeletons } from '../components/Skeletons';
import { GitHub as GitHubIcon } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const Home = ({setPokemonData}) => {
    const [pokemons, setPokemons] = useState([]);

    const navigate = useNavigate()
    

    useEffect(() => {
        getPokemons();
      }, []);

      const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 201; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
       axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

        };

        const pokemonFilter = (name) => {
            var filteredPokemons = [];
            if (name === "") {
              getPokemons();
            }
            for (var i in pokemons) {
              if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
              }
            }
        
            setPokemons(filteredPokemons);
          };

          const pokemonPickHandler = (pokemonData) => {
            setPokemonData(pokemonData)

            navigate("/profile")

          }

        return(
            <div>
            <Navbar pokemonFilter = { pokemonFilter } />

            <img
            src="assets/capa.jpeg"
            alt="Imagem Topo"
            style={{ width: '100%', height: 'auto',  marginBottom:"2em" }} // Este estilo vai ajustar a imagem colada à Navbar
            />

            <Container maxWidth="xl" >
              <Grid container spacing={2}>
            
            

                {pokemons.length === 0 ? <Skeletons xs={12} sm={6} md={4} lg={3}/> :
                
                pokemons.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>

                  <Box onClick={()=>pokemonPickHandler(pokemon.data)}>
                    <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                  </Box>

                  
                </Grid>
                ))
                
                }


              </Grid>
            </Container>

            <footer style={{ textAlign: 'center', marginTop: '2em' }}>
                <p>Wellyson Soares - {new Date().getFullYear()}</p>
                <Link href="https://github.com/Well-IDESCO" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={{ fontSize: 30 }} />
                </Link>
            </footer>

          </div>

        )
}