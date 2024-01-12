# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 0) do
  create_table "comments", id: { type: :integer, unsigned: true }, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", force: :cascade do |t|
    t.integer "post_id", null: false, unsigned: true
    t.text "contenido", null: false
    t.index ["post_id"], name: "post_id"
  end

  create_table "events", id: { type: :integer, unsigned: true }, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", force: :cascade do |t|
    t.string "nombre", limit: 100, null: false
    t.text "descripcion", null: false
    t.integer "asistentes", default: 0, unsigned: true
    t.integer "presencial", limit: 1, default: 0, null: false
    t.string "lugar", limit: 100, null: false
  end

  create_table "groups", id: { type: :integer, unsigned: true }, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", force: :cascade do |t|
    t.string "nombre", limit: 100, null: false
    t.integer "materia", limit: 1, default: 0, null: false
    t.string "imagen", limit: 100
  end

  create_table "posts", id: { type: :integer, unsigned: true }, charset: "utf8mb4", collation: "utf8mb4_unicode_ci", force: :cascade do |t|
    t.integer "group_id", null: false, unsigned: true
    t.string "titulo", limit: 100, null: false
    t.text "contenido", null: false
    t.integer "votos_up", default: 0, unsigned: true
    t.integer "votos_down", default: 0, unsigned: true
    t.index ["group_id"], name: "group_id"
  end

  add_foreign_key "comments", "posts", name: "comments_ibfk_1", on_update: :cascade
  add_foreign_key "posts", "groups", name: "posts_ibfk_1", on_update: :cascade
end
