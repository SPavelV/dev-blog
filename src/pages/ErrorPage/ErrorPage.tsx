import { useRouteError } from 'react-router-dom';
import './style.css';

export const ErrorPage = () => {
  const error: unknown = useRouteError();

  return (
    <div className='error-page'>
      <div className='inner'>
        <h1>ОЙ!</h1>
        <p>Извините, произошла непредвиденная ошибка.</p>
        <p>
          <i>
            {(error as Error)?.message ||
              (error as { statusText?: string })?.statusText}
          </i>
        </p>
      </div>
    </div>
  );
};
