import '../../App.css';
/* eslint-disable react/prop-types */
import { Alert, Button, Paper, TextField } from "@mui/material";

const ShastraForm = ({ handleSearch, setSearchQuery, searchQuery, error }) => {
  const handleChangeInput = (e) => {
    const inputValues = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");

    let letters = inputValues.slice(0, 2).replace(/[^A-Z]/g, "");
    let numbers = inputValues.slice(2, 4).replace(/[^0-9]/g, "");

    let formattedCode = `${letters}${numbers}`.trim();
    setSearchQuery(formattedCode);
  };

  return (
    <Paper sx={{ width: '100%', height: '100%', p: 4 }}>
      <div>
        <h1 className="!text-5xl md:!text-6xl !font-extrabold text-center text-gradient">
          Welcome to <br />
          <strong className="main-text-color text-[53px] md:text-[68px]">Shastra Life</strong>
        </h1>
        <p className="!my-3 text-lg md:text-xl text-orange-400 text-center">
          Experience the Divine Energy with our Temple-Consecrated Offerings
        </p>
      </div>

      <form
        className="flex flex-col justify-center items-center w-full"
        onSubmit={handleSearch}
      >
        <TextField
          fullWidth
          label="Enter Your Product ID here"
          onChange={handleChangeInput}
          value={searchQuery}
          inputProps={{ maxLength: 4 }}
          variant="standard"
          sx={{
            mb: 2,
            '& .MuiInputBase-root': {
              fontSize: '2rem',
              pt: '10px',
            },
            '& .MuiInputBase-root:focus': {
              color: 'red',
            },
            '& .MuiInputBase-input:focus': {
              color: 'orange',
            },
            '& .MuiInputLabel-root': {
              fontSize: '1.3rem',
              fontWeight: 600,
            },
          }}
        />

        <Button
          type="submit"
          fullWidth
          className='!text-white !bg-orange-500 hover:!bg-orange-600'
          sx={{
            py: 1.5,
            fontWeight: 'bold',
            letterSpacing: '0.1em',
          }}
        >
          Submit
        </Button>
      </form>

      {error && (
        <Alert
          variant="standard"
          severity="error"
          sx={{ mt: 2 }}
        >
          {error}
        </Alert>
      )}
    </Paper>
  );
};

export default ShastraForm;
