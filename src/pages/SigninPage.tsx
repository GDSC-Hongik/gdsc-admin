// import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import LogoIcon from "@/assets/logo.svg?react";
// import { GitHubButton } from "@/components/GitHubButton";
// import RoutePath from "@/routes/routePath";
// import { setCookie } from "@/utils/cookie";

/** 깃허브 로그인 및 가입하기 */
export default function SigninPage() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  // const handleClick = () => {
  //   setTimeout(function () {
  //     document.location.href = RoutePath.GithubLoginRedirect;
  //   }, 250);
  // };

  // useEffect(() => {
  //   // 로그인을 위한 oauth-base-uri 쿠키 값 세팅
  //   setCookie({
  //     key: "oauth-base-uri",
  //     value: window.location.origin,
  //     encoding: false,
  //   });
  // }, []);

  const handleClick = () => {

  }

  const handleChangeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }))
  }

  return (
    <Container component="main" sx={{ width: "100vw", height: "100vh" }}>
      <Stack
        gap="48px"
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoIcon />
        {/* <GitHubButton onClick={handleClick} /> */}
        <Grid>
          <Box sx={{ marginBottom: '15px' }}>
            <Box>이메일</Box>
            <TextField value={userInfo.email} name={'email'} onChange={handleChangeUserInfo} sx={{ width: '300px' }} />
          </Box>
          <Box>
            <Box>비밀번호</Box>
            <TextField value={userInfo.password} name={'password'} onChange={handleChangeUserInfo} sx={{ width: '300px' }} />
          </Box>
        </Grid>
        <Button onClick={handleClick} variant={'outlined'}>로그인하기</Button>
      </Stack>
    </Container>
  );
}
