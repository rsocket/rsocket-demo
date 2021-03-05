// Code generated by Wire protocol buffer compiler, do not edit.
// Source: io.rsocket.demo.api.Event in api.proto
package io.rsocket.demo.api

import com.squareup.wire.FieldEncoding
import com.squareup.wire.Message
import com.squareup.wire.ProtoAdapter
import com.squareup.wire.ProtoReader
import com.squareup.wire.ProtoWriter
import com.squareup.wire.Syntax.PROTO_3
import com.squareup.wire.WireField
import com.squareup.wire.internal.sanitize
import kotlin.Any
import kotlin.Boolean
import kotlin.Int
import kotlin.Long
import kotlin.String
import kotlin.hashCode
import kotlin.jvm.JvmField
import okio.ByteString

class Event(
  @field:WireField(
    tag = 1,
    adapter = "com.squareup.wire.ProtoAdapter#STRING",
    label = WireField.Label.OMIT_IDENTITY
  )
  @JvmField
  val type: String = "",
  @field:WireField(
    tag = 2,
    adapter = "io.rsocket.demo.api.JoinEvent#ADAPTER",
    label = WireField.Label.OMIT_IDENTITY
  )
  @JvmField
  val join: JoinEvent? = null,
  unknownFields: ByteString = ByteString.EMPTY
) : Message<Event, Event.Builder>(ADAPTER, unknownFields) {
  override fun newBuilder(): Builder {
    val builder = Builder()
    builder.type = type
    builder.join = join
    builder.addUnknownFields(unknownFields)
    return builder
  }

  override fun equals(other: Any?): Boolean {
    if (other === this) return true
    if (other !is Event) return false
    if (unknownFields != other.unknownFields) return false
    if (type != other.type) return false
    if (join != other.join) return false
    return true
  }

  override fun hashCode(): Int {
    var result = super.hashCode
    if (result == 0) {
      result = unknownFields.hashCode()
      result = result * 37 + type.hashCode()
      result = result * 37 + join.hashCode()
      super.hashCode = result
    }
    return result
  }

  override fun toString(): String {
    val result = mutableListOf<String>()
    result += """type=${sanitize(type)}"""
    if (join != null) result += """join=$join"""
    return result.joinToString(prefix = "Event{", separator = ", ", postfix = "}")
  }

  fun copy(
    type: String = this.type,
    join: JoinEvent? = this.join,
    unknownFields: ByteString = this.unknownFields
  ): Event = Event(type, join, unknownFields)

  class Builder : Message.Builder<Event, Builder>() {
    @JvmField
    var type: String = ""

    @JvmField
    var join: JoinEvent? = null

    fun type(type: String): Builder {
      this.type = type
      return this
    }

    fun join(join: JoinEvent?): Builder {
      this.join = join
      return this
    }

    override fun build(): Event = Event(
      type = type,
      join = join,
      unknownFields = buildUnknownFields()
    )
  }

  companion object {
    @JvmField
    val ADAPTER: ProtoAdapter<Event> = object : ProtoAdapter<Event>(
      FieldEncoding.LENGTH_DELIMITED, 
      Event::class, 
      "type.googleapis.com/io.rsocket.demo.api.Event", 
      PROTO_3, 
      null
    ) {
      override fun encodedSize(value: Event): Int {
        var size = value.unknownFields.size
        if (value.type != "") size += ProtoAdapter.STRING.encodedSizeWithTag(1, value.type)
        if (value.join != null) size += JoinEvent.ADAPTER.encodedSizeWithTag(2, value.join)
        return size
      }

      override fun encode(writer: ProtoWriter, value: Event) {
        if (value.type != "") ProtoAdapter.STRING.encodeWithTag(writer, 1, value.type)
        if (value.join != null) JoinEvent.ADAPTER.encodeWithTag(writer, 2, value.join)
        writer.writeBytes(value.unknownFields)
      }

      override fun decode(reader: ProtoReader): Event {
        var type: String = ""
        var join: JoinEvent? = null
        val unknownFields = reader.forEachTag { tag ->
          when (tag) {
            1 -> type = ProtoAdapter.STRING.decode(reader)
            2 -> join = JoinEvent.ADAPTER.decode(reader)
            else -> reader.readUnknownField(tag)
          }
        }
        return Event(
          type = type,
          join = join,
          unknownFields = unknownFields
        )
      }

      override fun redact(value: Event): Event = value.copy(
        join = value.join?.let(JoinEvent.ADAPTER::redact),
        unknownFields = ByteString.EMPTY
      )
    }

    private const val serialVersionUID: Long = 0L
  }
}
