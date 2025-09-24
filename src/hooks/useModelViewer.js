import { useEffect, useState } from 'react';

export const useModelViewer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadModelViewer = async () => {
      try {
        // Verificar si el script ya existe
        if (document.querySelector('script[src*="model-viewer"]')) {
          setIsLoading(false);
          return;
        }

        // Crear y cargar el script
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
        script.async = true;
        
        script.onload = () => {
          setIsLoading(false);
        };
        
        script.onerror = () => {
          setIsError(true);
          setIsLoading(false);
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Model Viewer:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    loadModelViewer();
  }, []);

  const activateAR = () => {
    const modelViewer = document.getElementById('modelo');
    if (modelViewer?.canActivateAR) {
      modelViewer.activateAR();
      return true;
    } else {
      console.warn('AR no está disponible en este dispositivo o navegador.');
      return false;
    }
  };

  return {
    isLoading,
    isError,
    activateAR
  };
};