import { Link, router } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function Orange() {
  const items = useMemo(() => Array.from({ length: 50 }, (_, i) => i), []);

  return (
    <ScrollView
      scrollToOverflowEnabled
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#ffa',
        padding: 16,
      }}
      contentInsetAdjustmentBehavior="automatic">
      <Text testID="e2e-screen">Orange</Text>
      <Text testID="e2e-can-back">{router.canGoBack()}</Text>
      <Link testID="e2e-navigate-apple" href="/three/apple">
        Navigate apple
      </Link>
      <Link testID="e2e-push-apple" href="/three/apple" push>
        Push apple
      </Link>
      <Link testID="e2e-replace-apple" href="/three/apple" replace>
        Replace apple
      </Link>
      <Link testID="e2e-navigate-banana" href="/three/banana">
        Navigate banana
      </Link>
      <Link testID="e2e-push-banana" href="/three/banana" push>
        Push banana
      </Link>
      <Link testID="e2e-replace-banana" href="/three/banana" replace>
        Replace banana
      </Link>

      {items.map((item, index) => {
        return (
          <View
            key={item}
            style={{
              marginVertical: 5,
            }}>
            <Text>{item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
