import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error: unknown = useRouteError();

  return (
    <div id='error-page'>
      <h1>ОЙ!</h1>
      <p>Извините, произошла непредвиденная ошибка.</p>
      <p>
        <i>
          {' '}
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  );
};
