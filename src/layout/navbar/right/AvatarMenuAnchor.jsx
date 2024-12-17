import React from 'react';
import { Menu, Box, MenuItem, Typography } from '@mui/material';
import SwitchMode from './SwitchMode';
import NavBarItem from '../middle/NavbarItem';
import useLogout from '../../../visitor/hooks/useLogout';
import ROUTES from '../../../routers/routerModel';
import { getUser, isAuthenticated } from '../../../services/LocalStorageService';

export default function AvatarMenu({ anchorEl, onClose }) {
    const user = getUser();
    const isLoggedIn = isAuthenticated();
    const { handleLogout } = useLogout();

    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
            PaperProps={{
                sx: {
                    padding: 2,
                    backgroundColor: 'background.paper',
                    minWidth: { xs: '200px', sm: '250px' },
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                {isLoggedIn && (
                    <>
                        <NavBarItem label="Profile" variant="vertical" to={ROUTES.PROFILE} onClick={onClose} />
                        <NavBarItem
                            label="Edit Profile" variant="vertical" to={`${ROUTES.EDIT_PROFILE}/${user._id}`} onClick={onClose}
                        />
                        {user?.isAdmin && (
                            <NavBarItem label="Admin" variant="vertical" to={ROUTES.ADMIN} onClick={onClose}
                            />
                        )}
                        <NavBarItem label="Logout" variant="vertical" to={ROUTES.ROOT} onClick={() => {
                            handleLogout(); onClose();
                        }}
                        />
                        <MenuItem>
                            <Typography sx={{ textAlign: 'center', width: '100%' }}>
                                {user.username}
                            </Typography>
                        </MenuItem>
                    </>
                )}
                {!isLoggedIn && (
                    <>
                        <NavBarItem label="Login" variant="vertical" onClick={onClose} to={ROUTES.LOGIN} />
                        <NavBarItem label="Signup" variant="vertical" onClick={onClose} to={ROUTES.SIGNUP} />
                    </>
                )}
                <MenuItem onClick={onClose}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <SwitchMode />
                    </Box>
                </MenuItem>
            </Box>
        </Menu>
    );
}
