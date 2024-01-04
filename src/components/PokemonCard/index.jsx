import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function PokemonCard({name, image, types}) {

  const typehandler = () => {
    if(types[1]){
      return types[0].type.name + " - " + types[1].type.name
    }
    return types[0].type.name;
  } 

  return (
    <Card sx={{ maxWidth: 345, borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor:"rgba(35, 43, 43, 0)"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="green iguana"
        />
        
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Pixelify Sans, sans-serif', fontSize: '25px'}}>
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" sx={{fontFamily: 'Pixelify Sans, sans-serif', fontSize: '16px'}}>
              {typehandler()}
            </Typography>
          
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}
                  </Box>
                  </CardContent>

      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
