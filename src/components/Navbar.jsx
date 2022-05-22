import { useState } from 'react';
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import styled from '@mui/material/styles/styled';
import MailIcon from '@mui/icons-material/Mail';

import FacebookIcon from '@mui/icons-material/Facebook';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')({
  backgroundColor: 'white',
  padding: '5px',
  width: '40%',
  borderRadius: '3px',
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Facbook
        </Typography>
        <FacebookIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase
            placeholder="Search..."
            sx={{ width: '100%', padding: '0px 10px' }}
          />
        </Search>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ display: { xs: 'none', sm: 'flex' } }}
        >
          <Badge
            badgeContent={4}
            color="error"
            sx={{ cursor: 'pointer' }}
          >
            <MailIcon />
          </Badge>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ cursor: 'pointer' }}
          >
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Cindy Baker"
            src={`https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/272863160_108040975121571_6886394609703318594_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJK9UgtwsGbIu8ganPZk4DufvRVQIiCSy5-9FVAiIJLG1elV7s8k7qxUekg1b6rwcMlOOqWoBpMLGHOwVeAT-j&_nc_ohc=lnh6duWse7AAX8JE_Fl&tn=AyRAEQV8y5lZUIzX&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9abWMjyOMpsq8w7TcYXyXt3MeEJLzAY2KS26stghmIdw&oe=628B2A64`}
            onClick={(e) => setIsOpen(!isOpen)}
            sx={{ cursor: 'pointer' }}
          />
        </Stack>
        <Box
          sx={{
            display: { xs: 'flex', sm: 'none' },
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Avatar
            alt="Cindy Baker"
            src={`https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/272863160_108040975121571_6886394609703318594_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJK9UgtwsGbIu8ganPZk4DufvRVQIiCSy5-9FVAiIJLG1elV7s8k7qxUekg1b6rwcMlOOqWoBpMLGHOwVeAT-j&_nc_ohc=lnh6duWse7AAX8JE_Fl&tn=AyRAEQV8y5lZUIzX&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9abWMjyOMpsq8w7TcYXyXt3MeEJLzAY2KS26stghmIdw&oe=628B2A64`}
            onClick={(e) => setIsOpen(!isOpen)}
            sx={{ cursor: 'pointer' }}
          />
          <Typography sx={{ fontWeight: 'bold' }}>
            Jakareya
          </Typography>
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpen}
        onClose={(e) => setIsOpen(!isOpen)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={(e) => setIsOpen(!isOpen)}>
          Profile
        </MenuItem>
        <MenuItem onClick={(e) => setIsOpen(!isOpen)}>
          My account
        </MenuItem>
        <MenuItem onClick={(e) => setIsOpen(!isOpen)}>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
