import { useEffect, useState, useRef } from 'react';

export const intReqdMessage = 'Integer(s) required!';

export const useFormValidator = (integers) => {
  const [integerError, setIntegerError] = useState('');

  const isFirstRun = useRef(true);

  useEffect(() => {
    const isValidIntegers = /^((\s?)(-?)(\d+)(,?)(\s?))+$/g.test(integers);

    if (integers.length && !isValidIntegers) {
      setIntegerError('Only valid integers allowed!');
    }

    if (!integers.length || (integers.length && isValidIntegers)) {
      setIntegerError('');
    }

    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (!integers.length) {
      setIntegerError(intReqdMessage);
    }
  }, [integers]);

  return [integerError, setIntegerError];
};

export default useFormValidator;
