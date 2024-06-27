import { Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, ThemeProvider, Typography, createTheme, Container, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useEffect } from 'react'
import { useSignInMutation } from '../../context/api/userApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../context/slices/authSlice';
import { toast } from 'react-toastify';

const defaultTheme = createTheme();

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    let [signIn, { data, isLoading, isSuccess, isError }] = useSignInMutation()
    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data?.data?.token))
            dispatch(setUser(data?.data?.user))
            navigate('/admin')
            toast.success(data?.message)
        }

    }, [isSuccess])
    useEffect(() => {
        if (isError) {
            toast.error('Login or password is incorrect')
        }
    }, [isError])
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let user = {
            UserName: data.get('username'),
            password: data.get('password'),
        }
        signIn(user)

    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <div className='h-[100vh] flex items-center justify-center'>
                <Container className='pb-10 border rounded-xl border-[#c4c4c4]' component="main" maxWidth="sm">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                type='text'
                                name="username"
                                autoComplete="username"
                                autoFocus
                                error={isError}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                error={isError}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                disabled={isLoading}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 0 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                type="button"
                                color='warning'
                                disabled={isLoading}
                                fullWidth
                                onClick={() => navigate('/')}

                                variant="contained"
                                sx={{ mt: 2, mb: 2 }}
                            >
                                Back to home
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    )
}

export default LoginForm