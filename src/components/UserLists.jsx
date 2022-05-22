import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function UserList() {
  return (
    <List
      sx={{
        width: '90%',
        maxWidth: 300,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Ajit"
            src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/279085380_1130622447484808_3755464654636435569_n.jpg?stp=dst-jpg_p600x600&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENfsXBRDtcvytMpHS56PJ3WbeWnXw9rHBZt5adfD2scEdCQifRBv0q-NImkpFuZWP_aC3fM8JJ8CpWaZgC7krZ&_nc_ohc=uyIW05RocDAAX_FnCXw&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-MdUCOpWvaierTU3dvWtHXt66fuj6L39mVipXVxvg6eQ&oe=628ACBDF"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Travis Howard"
            src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-1/269265742_1333222197106249_468571364021957352_n.jpg?stp=c0.11.320.320a_dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEOrE7U1qcRrLlDFhuO5Ord4_sPbrKdju_j-w9usp2O7xH-cQYv4lXYgnk3mcLaj1Tt-6Ew81ZatoqhlvDCylg_&_nc_ohc=lcNIGeztChMAX-eMoIM&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_7LDzPOn6MbGKdCDE7_PpFNZxf5iJSIwCJE8eiUEsd_Q&oe=628C0C5B"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
