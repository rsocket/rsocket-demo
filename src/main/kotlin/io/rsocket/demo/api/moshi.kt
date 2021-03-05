package io.rsocket.demo.api

import com.squareup.moshi.Moshi
import com.squareup.moshi.adapters.Rfc3339DateJsonAdapter
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import com.squareup.wire.WireJsonAdapterFactory
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import java.util.Date

val moshi = Moshi.Builder()
  .add(WireJsonAdapterFactory())
  .add(KotlinJsonAdapterFactory())
  .add(Date::class.java, Rfc3339DateJsonAdapter().nullSafe())
  .build()!!

inline fun <reified T> Flow<T>.encode(): Flow<String> {
  val adapter = moshi.adapter(T::class.java)
  return this.map { adapter.toJson(it) as String }
}