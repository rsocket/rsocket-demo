package io.rsocket.demo;

import org.junit.Test;

import static org.junit.Assert.assertNotNull;

public class AppTest {
  @Test public void hasMain() throws NoSuchMethodException {
    assertNotNull(App.class.getMethod("main", String[].class));
  }
}
