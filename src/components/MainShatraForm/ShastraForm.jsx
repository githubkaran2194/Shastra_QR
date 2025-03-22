/* eslint-disable react/prop-types */
import { Alert, Button, Paper, TextField } from "@mui/material";

const ShastraForm = ({ handleSearch, setSearchQuery, searchQuery, error }) => {

    const handleChangeInput =(e)=>{
    const inputValues= (e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "")); // Convert to uppercase & remove invalid characters

    let letters = inputValues.slice(0, 2).replace(/[^A-Z]/g, ""); // Extract first 2 letters (A-Z)
    let numbers = inputValues.slice(2, 4).replace(/[^0-9]/g, ""); // Extract next 2 numbers (0-9)

    let formattedCode = `${letters}${numbers}`.trim(); // Format as "SA 25"
    setSearchQuery(formattedCode)
    }
  return (
    <Paper className="!w-full !h-full !p-4">
      <div>
        <h1 className="!text-5xl md:!text-7xl !font-extrabold text-center text-gradient">
          Welcome to <strong className="main-text-color text-[53px] md:text-[68px] uppercase">Shastra Life</strong>
        </h1>
        <p className="!my-3 text-lg md:text-xl text-orange-400 text-center">
          Experience the Divine Energy with our Temple-Consecrated Offerings
        </p>
      </div>

      <form className="flex flex-col justify-center items-center w-full" onSubmit={handleSearch}>
        <TextField
          fullWidth
          className="!mb-4"
          label="Enter Your Product ID here"
          onChange={handleChangeInput}
          value={searchQuery}
          inputProps={{ maxLength: 4 }} 
          variant="standard"
        />
        <Button
          type="submit"
          className="bg-btn !text-white !w-full !py-2 !font-bold !tracking-widest"
        >
          Submit
        </Button>
      </form>
   {
    error ?   <Alert variant="standard" title="error" severity="error" className="!mt-2">{error}</Alert>  : ""
   }
    </Paper>
  );
};

export default ShastraForm;
