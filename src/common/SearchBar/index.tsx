import React, { useState } from "react";
import "./search.css";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loader from "../../Loader";
import { TextField, InputAdornment, IconButton } from "@mui/material";

const Search: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");

  const [query, setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setSearchText(clipboardText);
    } catch (error) {
      console.error('Failed to read clipboard contents:', error);
      alert('Failed to read clipboard contents.');
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    // Simulate an async task (like an API call or data fetch)
    setTimeout(() => {
      if (query.startsWith('https://open.spotify.com')) {
        alert('Success');
      } else {
        alert('Please enter a valid URL');
      }
      setLoading(false);
    }, 3000); // Loader will disappear after 3 seconds

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit();}
  }

  return (
    <main>
        {loading && <Loader />}
        <h1>Spotify Downloader</h1>
    <TextField
      fullWidth
      className="input" 
      value={searchText}
      onFocus={handleFocus}
      placeholder="https://open.spotify.com/..../...."
      onChange={(e) => setSearchText(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handlePaste} 
                  sx={{
                    backgroundColor: 'transparent',  // Remove background color
                    '&:hover': {
                      backgroundColor: 'transparent',  // Remove background on hover too
                    },
                    '&:focus': {
                      outline: 'none',  // Remove focus outline (optional)
                    },
                  }}>
            <ContentPasteIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSubmit} className={`go-icon ${(searchText.length > 0) ? "go-in" : ""}`} 
      sx={{
        backgroundColor: 'transparent',  // Remove background color
        '&:hover': {
          backgroundColor: 'transparent',  // Remove background on hover too
        },
        '&:focus': {
          outline: 'none',  // Remove focus outline (optional)
        },
      }}>
            <ArrowForwardIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-input': {
          border: 'none', // Removes the border
          boxShadow: 'none', // Removes the box shadow
          '&:hover': {
            boxShadow: 'none', // Removes box-shadow on hover
          },
          '&.Mui-focused': {
            border: 'none', // Removes the border when the field is focused
            boxShadow: 'none', // Removes the box-shadow on focus
          },
        },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #1db954 !important',
            borderRadius: '120px',         },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #1db954 !important',
            borderRadius: '120px',           },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #1db954 !important',
            borderRadius: '120px',           },
          
      }}
    />
  </main>
    // <main>
    //           {loading && <Loader />}
    //     <h1>Spotify Downloader</h1>
    //     <div className={`search-box ${isFocused ? "border-searching" : ""}`}>
    //     <IconButton onClick={handlePaste} style={{padding:'10px'}}>
    //       <ContentPasteIcon />
    //         </IconButton>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           type="text"
    //           id="search"
    //           placeholder="https://open.spotify.com/..../...."
    //           value={query}
    //           onChange={handleChange}
    //           onFocus={handleFocus}
    //           onBlur={handleBlur}
    //           autoComplete="off"
    //           className="input" 
    //           onKeyDown={handleKeyDown} 
    //         />
    //       </form>

    //       <div
    //         className={`go-icon ${(query.length > 0) ? "go-in" : ""}`}
    //         onClick={handleSubmit}
    //       >
    //         <ArrowForwardIcon />
    //       </div>

    //     </div>
    // </main>
  );
};

export default Search;
