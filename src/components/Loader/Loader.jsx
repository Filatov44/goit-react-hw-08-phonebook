import { Vortex } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';
export function Loader() {
  return (
    <StyledLoader>
      <Vortex
        visible={true}
        height="150"
        width="150"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </StyledLoader>
  );
}
