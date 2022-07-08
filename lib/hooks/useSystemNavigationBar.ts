import { useState, useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';

export const useSystemNavigationBar = () => {
  const [navigationBarVisible, setNavigationBarVisible] = useState(true);

  useEffect(() => {
    NavigationBar.setBehaviorAsync('inset-swipe').catch(console.error);
    NavigationBar.setVisibilityAsync('hidden').catch(console.error);

    NavigationBar.addVisibilityListener(({ visibility }) => {
      setNavigationBarVisible(visibility === 'visible');
    });
  }, []);

  return {
    isVisible: navigationBarVisible,
    toggleVisibility: () => {
      if (navigationBarVisible) {
        NavigationBar.setVisibilityAsync('hidden').catch(console.error);
      } else {
        NavigationBar.setVisibilityAsync('visible').catch(console.error);
      }
    },
  };
};
