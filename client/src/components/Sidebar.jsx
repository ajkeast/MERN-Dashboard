import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  Groups2Rounded,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  EmojiEmotions,
  MessageRounded,
  LeaderboardRounded,
  SmartToyOutlined,
  BlenderRounded,
  VolunteerActivism,
  AdminPanelSettings,
  CalendarMonth,
  Today,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Chat",
    icon: null,
  },
  {
    text: "Messages",
    icon: <MessageRounded />,
  },
  {
    text: "Members",
    icon: <Groups2Rounded />,
  },
  {
    text: "Emojis",
    icon: <EmojiEmotions />,
  },
  {
    text: "API Usage",
    icon: <SmartToyOutlined />,
  },
  {
    text: "Leaderboards",
    icon: null,
  },
  {
    text: "Firsts",
    icon: <LeaderboardRounded />,
  },
  {
    text: "Juice",
    icon: <BlenderRounded />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettings />,
  },
  {
    text: "Donations",
    icon: <VolunteerActivism />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            borderWidth: isNonMobile ? 0 : "2px",
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: 'hidden',
          },
        }}
      >
        <Box 
          width="100%" 
          sx={{
            opacity: isSidebarOpen ? 1 : 0,
            transition: theme.transitions.create('opacity', {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 0.5rem 2rem 0.5rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Box 
                    component="img"
                    alt="Peter Dinkboard"
                    src="image.webp"
                    height="5rem"
                    width="5rem"
                    />
                  <Typography variant="h4" fontWeight="bold">
                  PETER DINKBOARD
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem 
                    key={text} 
                    disablePadding
                    sx={{
                      '&:hover': {
                        transform: 'translateY(2px)', // Move down by 3 pixels
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow on hover
                        transition: 'transform 0.25s, box-shadow 0.25s', // Add a smooth transition effect for multiple properties
                      },
                    }}
                  >
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[800]
                            : theme.palette.secondary[50],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[800]
                              : theme.palette.secondary[50],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;