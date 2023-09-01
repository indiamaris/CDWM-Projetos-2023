import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { SearchInputI } from "../interfaces";



const SearchInput = ({ onSearch }: SearchInputI) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) onSearch(ref.current.value);
			}}>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					width={'1100px'}
					placeholder='Search games...'
					variant='filled'
				/>
			</InputGroup>
		</form>
	);
};


export default SearchInput;