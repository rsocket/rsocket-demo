rootProject.name = "rsocket-demo"

pluginManagement {
  resolutionStrategy {
    eachPlugin {
      if (requested.id.id == "com.google.cloud.tools.appengine") {
        useModule("com.google.cloud.tools:appengine-gradle-plugin:${requested.version}")
      }
    }
  }
}
