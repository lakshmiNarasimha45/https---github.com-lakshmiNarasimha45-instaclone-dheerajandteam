import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Explore() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mtNnxgRNUqWuts2j9OMpVsgYihGDEJSfGQ&usqp=CAU'
             height={300} width={400}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img src='https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg'
          height={300} width={400}
          
          />
        </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img src='https://assets.telegraphindia.com/telegraph/2023/Mar/1678836965_57c7769197215ff88fbbb4b52c34856d.gif'
             height={300} width={400}
            />

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img src='https://static.theprint.in/wp-content/uploads/2018/11/virat-kohli-test.jpg?compress=true&quality=80&w=376&dpr=2.6'
             height={300} width={400}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
        <Item><img src='https://m.economictimes.com/thumb/height-450,width-600,imgsize-30466,msid-95819207/samantha-sridevi-movies-yashoda-movie-releasing-on-november-11th-2022.jpg'
             height={300} width={400}
            />
        </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img src='https://www.themoviedb.org/t/p/w500/mNQA0qYtLeemo7mljd9RlG9jUMR.jpg '
             height={300} width={400}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
