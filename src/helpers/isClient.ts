// TO DETERMINE IF IT IS A CSR OR SSR
const isClient = () => typeof window !== 'undefined' && typeof document !== 'undefined';

export default isClient;
